import React from 'react';
import {  Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import bannerImg from '../../assets/banner.png';

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToTimer(){
    navigation.navigate('Timer');
  }

  return (
   
      <LinearGradient
          colors={['#f2e8ed', '#d98bb6']}
          style={styles.container}
        >
        <Image style={styles.banner} source={bannerImg} />

        <Text style={styles.title}>Hello Mônica, pronta para ser produtiva?</Text>
        <TouchableOpacity style={styles.button} onPress={navigateToTimer} >
          <MaterialIcons name='chevron-right' size={35} color='#fff' />
        </TouchableOpacity>

        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  banner: {
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    color: '#f71285',
    maxWidth: 300,
    fontWeight: "bold",
    marginVertical: 40,
  },
  button:{
    width: 75,
    height: 75,
    backgroundColor: '#f71285',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})