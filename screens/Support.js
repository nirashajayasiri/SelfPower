import { Button, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';

function Support(){

    return(
      <View style={styles.SupportBody}>
        <Text>Support page</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
      SupportBody:{
        padding: 20,
        backgroundColor: '#f4f4f4'
      }
  })

  export default Support;