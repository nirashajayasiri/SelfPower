import React, { useEffect, useState} from "react";
import {Text, StyleSheet, Image, View , TouchableOpacity } from 'react-native'
import {getProgram} from "../data/programs"
import {Program} from '../components/program';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function ProgramFAQ (image, title, showAlert){
 
    return(
        <View>
            <Image source={image} style={styles.programImg}/>
            {/* <View style={styles.programContent}>
                <Text style={styles.programTitle}>{title}</Text>
                <Text style={styles.details}>Duis nibh purus, maximus ut purus ut, porttitor consectetur sapien. Maecenas pulvinar tristique erat sed condimentum. Vivamus mattis.</Text>
                <Text style={styles.listItem}><FontAwesome5 name='phone-alt' style={styles.listIcon}/>&nbsp;&nbsp; 035-123 456 7890</Text>
                <Text style={styles.listItem}><FontAwesome5 name='map-marker-alt' style={styles.listIcon}/>&nbsp;&nbsp; Location: Colombo</Text>
                <Text style={styles.listItem}><FontAwesome5 name='calendar-plus' style={styles.listIcon}/>&nbsp;&nbsp; Date: 2022/12/02</Text>
            
            <TouchableOpacity onPress={showAlert} style={styles.downloadBtn}>
                <Text style={styles.btnText}>Download Guide</Text>
            </TouchableOpacity>
            
            </View> */}
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
