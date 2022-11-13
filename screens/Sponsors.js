import { Button, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';

function Sponsor(){

    return(
      <View style={styles.SponsorBody}>
        <Text>Sponsor page</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
      SponsorBody:{
        padding: 20,
        backgroundColor: '#f4f4f4'
      }
  })

  export default Sponsor;