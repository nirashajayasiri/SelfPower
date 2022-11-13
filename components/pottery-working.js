import React, { useEffect, useState} from "react";
import {Text, StyleSheet, Image, View  } from 'react-native'
import {getProgram} from "../data/programs"
import {Program} from './program';

function Pottery ({route}){

    const {programId} = route.params;
    const [program, setProgram] = useState({});

    useEffect(() => {
        setProgram(getProgram(programId));
    })    

    return(
        <View>
            <Image source={program.image} style={styles.programImg}/>
            <View style={styles.programContent}>
            <Text style={styles.programTitle}>{program.title}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    programImg:{
        width: '100%',
        height: 200,
        display: 'flex',
        
    },
    programTitle:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    programContent:{
        flexBasis:'100%',
        display: 'flex',
        padding: 20,
    }
})

export default Pottery;