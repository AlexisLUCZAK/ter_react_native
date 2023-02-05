import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>TER</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>
          Application crée par Alexis LUCZAK pour tester la performance entre les framworks
        </Text>
        <Text style={styles.text}>
          Voici la liste des différentes frameworks comparés:
        </Text>
        <Text style={styles.text}>• Flutter</Text>
        <Text style={styles.text}>• React Native</Text>
        <Text style={styles.text}>• Ionic</Text>
        <View style={styles.divider} />
        <Text style={styles.text}>Liste d'items servant pour les tests</Text>
        <FlatList
          data={Array.from(Array(1000).keys())}
          keyExtractor={(item) => item.toString()}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image source={require('./images/fast_2.png')} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>Team FAST</Text>
                <Text style={styles.itemText}>À jamais dans mon coeur !</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  body: {
    flex: 1,
    padding: 5,
  },
  text: {
    marginBottom: 5,
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 5,
  },
  itemContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    resizeMode:'contain'
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemText: {
    marginTop: 5,
  },
});

export default App;