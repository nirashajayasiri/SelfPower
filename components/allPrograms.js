import React, {useEffect, useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, TouchableOpacity,Image, TextInput, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import SearchBar from "react-native-dynamic-search-bar";
import {getPrograms} from "../data/programs"
import {Program} from '../components/program';
import Pottery from '../components/pottery';


export function AllPrograms({navigation}){

    function renderProgram({item: program}){
        return(
            <Program 
                {...program}
                onPress={() => {
                    navigation.navigate('Pottery', {programId: program.id})
                }}  
            />
        )
    }

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        setPrograms(getPrograms())
    })

    return(
        <View style={styles.ProgramsBody}>
            <View style={styles.searchWrap}>
                <View style={styles.searchBar}>
                <TextInput
                    style={styles.search} 
                    value='Search a program' 
                />
                <FontAwesome5 name='search' style={styles.searchIcon}/>
                </View>
            </View>
            <View style={styles.programsWrap}>
                <FlatList 
                style={styles.ProgramsList}
                contentContainerStyle={styles.programsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={programs}
                renderItem={renderProgram}
                />
            </View>
        </View>   
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


