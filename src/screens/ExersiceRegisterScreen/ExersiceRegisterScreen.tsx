import React, { useState, useEffect } from 'react';
import { Text, View, Button, Pressable, TouchableOpacity } from 'react-native';
import { ExersiceRegisterScreenStyles } from './ExersiceRegisterScreenStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';

export const ExersiceRegisterScreen: React.FC<Navigation> = ({
  navigation,
}) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <View
      style={[
        ExersiceRegisterScreenStyles.container,
        { backgroundColor: '#E7C0C0' },
      ]}
    >
      <View
        style={ExersiceRegisterScreenStyles.ExersiceRegisterHeaderContainer}
      >
        <Text style={ExersiceRegisterScreenStyles.text}>うんどうする</Text>
      </View>

      <View style={[ExersiceRegisterScreenStyles.container, { flex: 2 }]}>
        <TouchableOpacity onPress={() => setRunning(!running)}>
          <View
            style={[
              ExersiceRegisterScreenStyles.timerContainer,
              { backgroundColor: running ? 'blue' : 'white' },
            ]}
          >
            <Text
              style={[
                ExersiceRegisterScreenStyles.timerText,
                { color: running ? 'white' : 'black' },
              ]}
            >
              {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
              {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={ExersiceRegisterScreenStyles.ExersiceRegisterFooterContainer}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <ProcessButton
            onClick={() => navigation.goBack()}
            content={'もどる'}
          />
          <ProcessButton
            onClick={() => {
              // if(validete()) navigation.navigate('MainScreen');
              navigation.navigate('MainScreen');
            }}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};
