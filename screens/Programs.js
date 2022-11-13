import React, {useEffect, useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, TouchableOpacity,Image, TextInput, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import SearchBar from "react-native-dynamic-search-bar";
import {getPrograms} from "../data/programs"
import {Program} from '../components/program';
import {AllPrograms} from '../components/allPrograms'
import Pottery from '../components/pottery'


export function Programs({navigation}){
 
const Stack = createStackNavigator();

    function renderProgram({item: program}){
        return(
            <Program 
                {...program}/>
        )
    }

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        setPrograms(getPrograms())
    })

    return(

        <Stack.Navigator  screenOptions={({ route }) => ({
            headerShown: false,  
        })}>
            <Stack.Screen name="All Programs" component={AllPrograms}/>   
            <Stack.Screen name="Pottery" component={Pottery}/>   
        </Stack.Navigator>
    )
  }

  const styles = StyleSheet.create({
      ProgramsBody:{
        padding: 20,
        backgroundColor: '#f4f4f4'
      },
      searchWrap:{
        position: 'absolute',
        display:'flex',
        flexBasis: 1,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,

      },
      searchBar:{
          borderColor: '#E8D4F4',
          backgroundColor: '#f9efff',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderWidth: 2,
          borderRadius: 4,
          flexDirection: 'row',
          alignItems: 'center',
      },
      search:{
        fontSize: 18,
        color: '#721CA8',
        fontWeight: 'bold',
      },
      searchIcon:{
        alignContent: 'flex-end',
        position: 'absolute',
        right: 20,
        fontSize: 20,
        color: '#721CA8'
      },
      programsWrap:{
          paddingTop: 55,
      }
  })
