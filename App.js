import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import {useState} from 'react';

 
export default function App() {
  
  return (
    <>
      <View style = {styles.headerbar}>
        <Text style = {styles.title}>SelfPower</Text>
        <TouchableOpacity style={styles.search} activeOpacity={0.5}>
        <Image
          source={require('./assets/search.svg')}
          style={styles.searchIconStyle}></Image>
    </TouchableOpacity>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  headerbar: {
    backgroundColor: '#A12EE8',
    flexDirection: 'row',
    maxHeight: 100,
    padding: 10,
    
  },
  title:{
    color: '#ffffff',
    fontSize: 20,
    flex: 2,
    fontWeight: 'bold',
  },
  search:{
    height: 32,
    width: 32,
    flex:1,
  },
  searchIconStyle:{
    height: 25,
    maxWidth: 32,
    resizeMode: 'stretch',
  }
});
