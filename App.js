
import { Button, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import { Programs } from './screens/Programs';
import Sponsors from './screens/Sponsors';
import Support from './screens/Support';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
           if (route.name === 'SelfPowerHome') {
             iconName = 'home';
             size = focused ? 25 : 20;
            //  color = focused ? '#A12EE8' : '#000000'
           }
           else if (route.name === 'Programs') {
             iconName = 'book';
             size = focused ? 25 : 20;
            //  color = focused ? '#A12EE8' : '#000000'
           }
           else if (route.name === 'Sponsors') {
             iconName = 'users';
             size = focused ? 25 : 20;
            //  color = focused ? '#A12EE8' : '#000000'
           }
           else if (route.name === 'Support') {
             iconName = 'user-alt';
             size = focused ? 25 : 20;
            //  color = focused ? '#A12EE8' : '#000000'
           }
           return (
             <FontAwesome5 name={iconName} size={size} color={color} />
           )
          },
          tabBarStyle:{
            backgroundColor: '#fcf0ff',
            paddingBottom: 7,
            paddingTop: 7,
            height: 60
          },
          tabBarActiveTintColor:'#A12EEB',
          tabBarInactiveTintColor: '#000000',
          headerStyle:{
            backgroundColor: '#a12eeb'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <Pressable style={styles.searchBtn}>
              <FontAwesome5 name='search' style={styles.searchIcon}/>
            </Pressable>
          )
        })} 
        >
        <Tab.Screen name="SelfPowerHome" 
        component={Home}
        options={{
          title: 'Self Power',
          tabBarLabel:'Home',
        }
        }>         
        </Tab.Screen>

        <Tab.Screen name="Programs" 
        component={Programs}
        options={{
          title: 'Programs',
          tabBarLabel: 'Programs',
        }
        }>
        </Tab.Screen>

        <Tab.Screen name="Sponsors" 
        component={Sponsors}
        options={{
          title: 'Sponsors',
          tabBarLabel: 'Sponsors',          
        }
        }>
        </Tab.Screen>

        <Tab.Screen name="Support" 
        component={Support}
        options={{
          title: 'Support',
          tabBarLabel: 'Support',
        }
        }>
        </Tab.Screen>
        </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  searchBtn:{
    marginRight: 10,
    padding: 4,
  },
  searchIcon: {
    color: '#ffffff',
    fontSize: 20,
  }
})