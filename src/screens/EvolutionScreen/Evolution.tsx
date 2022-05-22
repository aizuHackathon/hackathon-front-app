import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { EvolutionStyles } from './EvolutionStyle';
import { Navigation } from '../screan';
import beforeEvol1 from '../../../assets/images/beforeEvolution1.jpg';
import afterEvol from '../../../assets/images/afterEvolution.jpg';
import CharacterOne from '../../../assets/images/character_1.png';
import CharacterTwo from '../../../assets/images/character_2.png';
import CharacterOne_2 from '../../../assets/images/character1_2.png';
import CharacterTwo_2 from '../../../assets/images/character2_2.png';
import FadeInOut from 'react-native-fade-in-out';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';

export const Evolution: React.FC<Navigation> = ({ navigation }) => {
  const BGImageUriObject = [
    Image.resolveAssetSource(beforeEvol1).uri,
    Image.resolveAssetSource(afterEvol).uri,
  ];

  const CImageUriArray = [
    Image.resolveAssetSource(CharacterOne).uri,
    Image.resolveAssetSource(CharacterOne_2).uri,
    Image.resolveAssetSource(CharacterTwo).uri,
    Image.resolveAssetSource(CharacterTwo_2).uri,
  ];

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [isVisivle, setIsVisible] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [word, setWord] = useState(
    <Text style={EvolutionStyles.hukidashiInnerText}>
      {'おや…ター坊の様子が…'}
    </Text>,
  );

  useEffect(() => {
    // TODO : 型指定
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const sec = Math.floor(time / 1000);

    // 進化前
    if (sec === 3) {
      setIsVisible(false);
    }

    // 進化後
    if (sec === 10) {
      setWord(
        <View>
          <Text style={EvolutionStyles.hukidashiInnerText}>{'ター坊は、'}</Text>
          <Text style={EvolutionStyles.hukidashiInnerText}>
            {'ミドルター坊に進化した！'}
          </Text>
        </View>,
      );
      setImageIndex(imageIndex + 1);
      setIsVisible(true);
    }

    // 戻るボタン表示
    if (sec === 15) {
      setRunning(false);
    }
  }, [time]);

  return (
    <View style={EvolutionStyles.container}>
      <View style={EvolutionStyles.backgoroundImageConteiner}>
        <Image
          source={{ uri: BGImageUriObject[imageIndex] }}
          resizeMode='cover'
          style={EvolutionStyles.backgroundImage}
        />
      </View>
      {/*
        キャラクターレイヤー
        z-index : 0
      */}
      <FadeInOut
        visible={isVisivle}
        scale={!isVisivle}
        duration={5000}
        rotate={!isVisivle}
      >
        <View style={EvolutionStyles.characterImageContainer}>
          <Image
            source={{ uri: CImageUriArray[imageIndex] }}
            resizeMode='contain'
            style={EvolutionStyles.characterImage}
          />
        </View>
      </FadeInOut>

      {/*
        吹き出しレイヤー
        z-index : 1
      */}
      <View style={EvolutionStyles.TopLevelContainer}>
        <View style={EvolutionStyles.hukidashi}>
          <FadeInOut visible={isVisivle} duration={5000}>
            <View style={EvolutionStyles.rectangle}>{word}</View>
          </FadeInOut>
        </View>
        {!running && (
          <View style={EvolutionStyles.BottomBtnGroup}>
            <View style={EvolutionStyles.BottomBtn}>
              <ProcessButton
                content='もどる'
                onClick={() => navigation.goBack()}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
