import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  // Lista de URLs de imágenes para simular un feed de Instagram.
  const images = [
    'https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Photo+1',
    'https://via.placeholder.com/400x300/FFBD33/FFFFFF?text=Photo+2',
    'https://via.placeholder.com/400x300/75FF33/FFFFFF?text=Photo+3',
    'https://via.placeholder.com/400x300/33FFDD/FFFFFF?text=Photo+4',
    'https://via.placeholder.com/400x300/337BFF/FFFFFF?text=Photo+5',
    'https://via.placeholder.com/400x300/8433FF/FFFFFF?text=Photo+6',
    'https://via.placeholder.com/400x300/F733FF/FFFFFF?text=Photo+7',
    'https://via.placeholder.com/400x300/FF335E/FFFFFF?text=Photo+8',
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.headerText}>InstaScroll</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {images.map((image, index) => (
            <View key={index} style={styles.postContainer}>
              <Image source={{ uri: image }} style={styles.image} />
              <Text style={styles.caption}>This is photo {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    color: '#333',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  postContainer: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  caption: {
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
});
