import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { escucharContactos } from '../firebaseConfig';

export default function ListaScreen(props) {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {

    const limpiarSuscripcion = escucharContactos(setContactos);
    
    return limpiarSuscripcion;
  }, []);

  return (
    <View style={styles.container}>
      
      {contactos.length === 0 ? (
        <Text style={styles.textoVacio}>No hay contactos guardados.</Text>
      ) : (
        <FlatList
          data={contactos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => props.navigation.navigate('Detalle', { id: item.id })}
            >
              <Text style={styles.nombre}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {}
      <Button 
        title="Agregar contacto" 
        onPress={() => props.navigation.navigate('Nuevo')} 
        
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e1e7ee68',
  },
  textoVacio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f2f2f25b', 
    padding: 15,
    marginBottom: 10,
    borderWidth: 1, 
    borderColor: '#ccccccc2',
  },
  nombre: {
    fontSize: 18,
    color: '#000',
  }
});