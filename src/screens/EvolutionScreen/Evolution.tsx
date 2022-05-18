import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { EvolutionStyles } from './EvolutionStyle';
import { Navigation } from '../screan';
import beforeEvol1 from '../../../assets/images/beforeEvolution1.jpg';
import beforeEvol2 from '../../../assets/images/beforeEvolution2.jpg';
import afterEvol from '../../../assets/images/afterEvolution.jpg';
import CharacterOne from '../../../assets/images/character_1.png';
import CharacterTwo from '../../../assets/images/character_2.png';
import CharacterOne_2 from '../../../assets/images/character1_2.png';
import CharacterTwo_2 from '../../../assets/images/character2_2.png';
import FadeInOut from 'react-native-fade-in-out';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Evolution: React.FC<Navigation> = ({ navigation }) => {
  const BGImageUriObject = [
    Image.resolveAssetSource(beforeEvol1).uri,
    Image.resolveAssetSource(beforeEvol2).uri,
    Image.resolveAssetSource(afterEvol).uri,
  ];

  const CImageUriArray = [
    Image.resolveAssetSource(CharacterOne).uri,
    Image.resolveAssetSource(CharacterTwo).uri,
    Image.resolveAssetSource(CharacterOne_2).uri,
    Image.resolveAssetSource(CharacterTwo_2).uri,
  ];

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
        console.log(time);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <View style={EvolutionStyles.container}>
      <View style={EvolutionStyles.backgoroundImageConteiner}>
        <Image
          source={{ uri: BGImageUriObject[0] }}
          resizeMode='cover'
          style={EvolutionStyles.backgroundImage}
        />
      </View>
      {/*
            キャラクターレイヤー
            z-index : 0
          */}
      <View style={EvolutionStyles.characterImageContainer}>
        <Image
          source={{ uri: CImageUriArray[0] }}
          resizeMode='contain'
          style={EvolutionStyles.characterImage}
        />
      </View>
      {/*
            ボタン群レイヤー
            z-index : 1
          */}
      <View style={EvolutionStyles.TopLevelContainer}>
        <FadeInOut visible={true} scale={true}>
          <View style={EvolutionStyles.rectangle}>
            <Text style={EvolutionStyles.hukidashiInnerText}>
              {'おや…ター坊の様子が…'}
            </Text>
          </View>
        </FadeInOut>
      </View>
    </View>
  );
};
