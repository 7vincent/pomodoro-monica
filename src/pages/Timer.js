import React, {useState, useRef} from 'react';
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
 
function formatSeconds(seconds){
  if(seconds < 60){
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

export default function Timer() {
  const timerRef = useRef();

  const [secondsEllapsed, setSecondsEllapsed] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(false);


  function toggleTimer(){
    if(timerEnabled){
      clearInterval(timerRef.current);

      setTimerEnabled(false);
    }
    else{
      timerRef.current = setInterval(() => {
        setSecondsEllapsed(state => state + 1);
      }, 1000);
      setTimerEnabled(true);
    }

  }

  return (
   
      <LinearGradient
          colors={['#f2e8ed', '#d98bb6']}
          style={styles.container}
        >
        <Text style={styles.title}>Pomodora</Text>

        <AnimatedCircularProgress
          size={280}
          width={12}
          fill={(secondsEllapsed * 100)/ 600} //10 min
          tintColor="#f71285"
          rotation={0}
          backgroundColor="#fff">
          {
            () => (
              <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>
            )
          }
        </AnimatedCircularProgress> 


        <TouchableOpacity style={styles.button} onPress={toggleTimer} >
          <MaterialIcons name={timerEnabled ? 'pause' : 'play-arrow'} size={35} color='#fff' />
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
  button:{
    width: 75,
    height: 75,
    marginTop: 40,
    backgroundColor: '#f71285',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    color: '#f71285',
    maxWidth: 300,
    fontWeight: "bold",
    marginVertical: 40,
    marginBottom: 40,
  },
  progress: {
    textAlign: 'center',
    fontSize: 60,
    color: '#f71285',
    fontWeight: "bold",
  }
})