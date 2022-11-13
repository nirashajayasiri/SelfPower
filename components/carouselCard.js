import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.rating}><FontAwesome5 name='star' style={styles.stars}/><FontAwesome5 name='star' style={styles.stars}/><FontAwesome5 name='star' style={styles.stars}/><FontAwesome5 name='star' style={styles.stars}/><FontAwesome5 name='star' style={styles.stars}/></Text> 
        <Text style={styles.reviewBody}>{item.body}</Text>
        <Text style={styles.reviewTitle}>{item.title}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30,
    },
    reviewTitle:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    reviewBody:{
        fontSize: 16,
        color: '#656565',
        marginBottom: 5,
    },
    stars:{
        color: '#ff9900',
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating:{
        marginBottom: 7,
    }
  })

  export default CarouselCardItem;