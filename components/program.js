import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from "react-native";

export function Program({title, desc, image, onPress}){

    return (
      <TouchableOpacity style={styles.programCard} onPress={onPress}>
        <Image source={image} style={styles.programImage}/>
        <View style={styles.programInfo}>
            <Text style={styles.programTitle}>{title}</Text>
            <Text style={styles.programDesc}>{desc}</Text>
            <Text style={styles.link}>Learn more</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    programCard:{
        flexDirection: 'row',
        padding: 0,
        marginTop: 12,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%',
        flexBasis:'100%',
        overflow: 'hidden',
        borderColor: '#e7e7e7',
        borderWidth: 1,
    },
    programImage:{
        flexBasis: '35%',
        height: '100%'
    },
    programInfo:{
        paddingVertical: 5,
        paddingHorizontal: 12,
        flexBasis: '65%'
    },
    programTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    programDesc:{
        color: '#656565',
        fontSize: 15,
        marginTop: 5,
    }
  })
