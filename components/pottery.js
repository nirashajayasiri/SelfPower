import React, { useEffect, useState} from "react";
import {Text, StyleSheet, Image, View, TouchableOpacity, Alert  } from 'react-native'
import {getProgram} from "../data/programs"
import {Program} from './program';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ProgramDetails } from "../components/programDetails";
import { ProgramFAQ } from "../components/programFaq";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Pottery ({route}){

    // function renderProgram({item: program}){
    //     return(
    //         <Program 
    //             {...program} />
    //     )
    // }

    const {programId} = route.params;
    const [program, setProgram] = useState({});

    useEffect(() => {
        setProgram(getProgram(programId));
    }) 
    
    const showAlert = () => {
        Alert.alert("Success",
        "Your Guide will be downloaded",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
    }

    return(
        <View>
            <Image source={program.image} style={styles.programImg}/>
            <View style={styles.programContent}>
                <Text style={styles.programTitle}>{program.title}</Text>
                <Text style={styles.details}>Duis nibh purus, maximus ut purus ut, porttitor consectetur sapien. Maecenas pulvinar tristique erat sed condimentum. Vivamus mattis.</Text>
                <Text style={styles.listItem}><FontAwesome5 name='phone-alt' style={styles.listIcon}/>&nbsp;&nbsp; 035-123 456 7890</Text>
                <Text style={styles.listItem}><FontAwesome5 name='map-marker-alt' style={styles.listIcon}/>&nbsp;&nbsp; Location: Colombo</Text>
                <Text style={styles.listItem}><FontAwesome5 name='calendar-plus' style={styles.listIcon}/>&nbsp;&nbsp; Date: 2022/12/02</Text>
            
            <TouchableOpacity onPress={showAlert} style={styles.downloadBtn}>
                <Text style={styles.btnText}>Download Guide</Text>
            </TouchableOpacity>
            
            </View>
        </View>

    // <Tab.Navigator>
    //   <Tab.Screen name="Program Details" component={ProgramDetails} />
    //   <Tab.Screen name="Program FAQ" component={ProgramFAQ} />
    // </Tab.Navigator>
        
    )
}

const styles = StyleSheet.create({
    programImg:{
        width: '90%',
        height: 200,
        display: 'flex',
        marginHorizontal: '5%',
        borderRadius: 10,
        marginTop: 20,
        
    },
    programTitle:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    programContent:{
        flexBasis:'100%',
        display: 'flex',
        padding: 20,
    },
    details:{
        marginTop: 5,
        marginBottom: 10,
        fontSize: 15,
        color: '#656565'
    },
    listItem:{
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#721CA8',
        paddingStart: 20,
    },
    listIcon:{
        fontSize: 20,
    },
    downloadBtn:{
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#721CA8',
        marginTop: 20,
        borderRadius: 6,
    },
    btnText:{
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: "bold",
    }
})

export default Pottery;