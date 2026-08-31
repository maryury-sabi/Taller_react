import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { guardarContacto } from '../firebaseConfig';

export default function NuevoScreen(props) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');

  const guardarDatos = async () => {
   
    if (nombre === '' || telefono === '' || ciudad === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      
      await guardarContacto({ nombre: nombre, telefono: telefono, ciudad: ciudad });
      
      
      props.navigation.navigate('Lista'); 
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el contacto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agregar nuevo contacto</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Escribe el teléfono"
        keyboardType="numeric"
        value={telefono}
        onChangeText={setTelefono}
      />

      <TextInput
        style={styles.input}
        placeholder="Escribe la ciudad"
        value={ciudad}
        onChangeText={setCiudad}
      />

      {}
      <Button title="Guardar contacto" onPress={guardarDatos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e7f6fe5f',
  
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
   
  },
  input: {
    border: 1,
    borderColor: 'black', 
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f7f0f0bc',
    borderRadius: 5,
  },
});