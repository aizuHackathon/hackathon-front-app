import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Navigation } from '../screan';
import { MainScreenStyles } from './MainScreenStyle';
import rainyImage from '../../../assets/images/rainy.jpg';
import cloudImage from '../../../assets/images/cloudy.jpg';
import sunnyImage from '../../../assets/images/sunny.jpg';

export const MainScreen: React.FC<Navigation> = ({ navigation }) => {
  const imageUriArray = [
    Image.resolveAssetSource(rainyImage).uri,
    Image.resolveAssetSource(cloudImage).uri,
    Image.resolveAssetSource(sunnyImage).uri,
  ];

  console.log(imageUriArray[0]);

  return (
    <View style={MainScreenStyles.container}>
      <ImageBackground
        source={{ uri: imageUriArray[Math.floor(Math.random() * 3)] }}
        resizeMode='cover'
        style={MainScreenStyles.image}
      ></ImageBackground>
    </View>
  );
};
