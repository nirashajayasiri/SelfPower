import { Button, StyleSheet, Pressable, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/carouselCard'
import data from '../data/testimonials'

function Home(){

  const isCarousel = React.useRef(null);

    return(
      <ScrollView style={styles.HomeBody}>
        <View style={styles.imgWrap}>
          <Image source={require('../assets/homeBanner.png')} style={styles.bannerImg}></Image>
        </View>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Upcoming Events</Text>
            <ScrollView style={styles.eventsList}>
              <Pressable style={styles.eventItem}>
                <Text>Mushroom Farming Workshop - 2022/11/30</Text>
              </Pressable>
              <Pressable style={styles.eventItem}>
                <Text>Pottery Workshop - 2022/12/02</Text>
              </Pressable>
              <Pressable style={styles.eventItem}>
                <Text>Cane Products Workshop - 2022/12/05</Text>
              </Pressable>
            </ScrollView>
        </View>
        <View style={styles.stats}>
          <View style={styles.statCol}>
            <Text style={styles.statTitle}>50+</Text>
            <Text style={styles.statLabel}>Programs Held So Far</Text>
          </View>
          <View style={styles.statCol}>
            <Text style={styles.statTitle}>15+</Text>
            <Text style={styles.statLabel}>Sponsorships offered</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Our Success Stories</Text>
        </View>
        <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
      HomeBody:{
        padding: 0,
        backgroundColor: '#ffffff',
      },
      imgWrap: {
        paddingHorizontal: 20,
        backgroundColor: '#ffffff'
      },
      bannerImg:{
        height: 220,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      card: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
      },
      cardTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        flexDirection: 'column'
      },
      eventsList:{
        height: 50,
        width: '100%',
        marginTop: 10,
      },
      eventItem:{
        flex: 1,
        paddingVertical: 3,
        paddingHorizontal: 3,
      },
      stats:{
        backgroundColor: '#f9efff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        marginTop: 10,
      },
      statCol:{
        flex: 1,
        paddingHorizontal: 10,
      },
      statTitle:{
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: 40,
        color: '#721ca8',
        textAlign: 'center'
      },
      statLabel:{
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 15,
        color: '#721ca8'
      }
  })

  export default Home;