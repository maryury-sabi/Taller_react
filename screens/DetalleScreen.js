import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { doc, getDoc, deleteDoc } from 'firebase/firestore'; 
import { db } from '../firebaseConfig'; 

export default function DetalleScreen(props) {
  let idContacto = props.route.params.id;
  const [contacto, setContacto] = useState(null); 

  useEffect(() => {
    const cargarDatos = async () => {

     let referencia = doc(db, 'contactos', idContacto);
      let documento = await getDoc(referencia);
      
      if (documento.exists()) {
        let datos = documento.data();
        setContacto(datos);
        props.navigation.setOptions({ title: datos.nombre }); 
      }
    };
    
    cargarDatos();
  }, []); 

  // Función que se conecta a Firebase y borra el documento
  const borrarDeFirebase = async () => {
    try {
    let referencia = doc(db, 'contactos', idContacto);
      await deleteDoc(referencia);
      
      // Si lo borra bien, me devuelvo a la lista
      props.navigation.navigate('Lista');
    } catch (error) {
      Alert.alert("Error", "No se pudo borrar el contacto");
    }
  };

  // Función para mostrar el mensaje de confirmación antes de borrar
  const confirmarBorrado = () => {
    Alert.alert(
      "Confirmar",
      "¿Estás seguro de que quieres eliminar este contacto?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sí, borrar", onPress: borrarDeFirebase }
      ]
    );
  };

  if (contacto == null) {
    return (
      <View style={styles.contenedor}>
        <Text>Cargando los datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Nombre: {contacto.nombre}</Text>
      <Text style={styles.texto}>Teléfono: {contacto.telefono}</Text>
      <Text style={styles.texto}>Ciudad: {contacto.ciudad}</Text>

      {/* Botón rojo para eliminar el contacto */}
      <View style={{ marginTop: 30 }}>
        <Button 
          title="Eliminar contacto" 
          color="red" 
          onPress={confirmarBorrado} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e1ecee68',
    border: 1,

  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: '#f2f2f2ef', 
    padding: 10,
    border: 3, 
    borderColor: 'black'
  }
});