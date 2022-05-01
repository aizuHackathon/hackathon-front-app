import React from 'react';
import { View, Text, Image } from 'react-native';
import { LoadingStyles } from './LoadingStyle';
import BouncingPreloader from 'react-native-bouncing-preloaders';
import CharacterOne from '../../../assets/images/character_1.png';
import CharacterTwo from '../../../assets/images/character_2.png';
import CharacterOne_2 from '../../../assets/images/character1_2.png';
import CharacterTwo_2 from '../../../assets/images/character2_2.png';

export const Loading: React.FC = () => {
  const CImageUriArray = [
    Image.resolveAssetSource(CharacterOne).uri,
    Image.resolveAssetSource(CharacterTwo).uri,
    Image.resolveAssetSource(CharacterOne_2).uri,
    Image.resolveAssetSource(CharacterTwo_2).uri,
  ];
  return (
    <View style={LoadingStyles.loadingContainer}>
      <BouncingPreloader icons={CImageUriArray} />
      <Text style={LoadingStyles.text}>よみこみちゅう...</Text>
    </View>
  );
};
