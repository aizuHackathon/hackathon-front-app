import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Navigation } from '../screan';
import { MainScreenStyles } from './MainScreenStyle';
import { Loading } from '../../components/Loading/Loading';
import rainyImage from '../../../assets/images/rainy.jpg';
import cloudImage from '../../../assets/images/cloudy.jpg';
import sunnyImage from '../../../assets/images/sunny.jpg';
import CharacterOne from '../../../assets/images/character_1.png';
import CharacterTwo from '../../../assets/images/character_2.png';
import CharacterOne_2 from '../../../assets/images/character1_2.png';
import CharacterTwo_2 from '../../../assets/images/character2_2.png';
import { WEATHER_API_KEY } from '@env';

export const MainScreen: React.FC<Navigation> = ({ navigation }) => {
  type BGUriArray = {
    Rain: string;
    Clouds: string;
    Clear: string;
  };

  const BGImageUriArray: BGUriArray = {
    Rain: Image.resolveAssetSource(rainyImage).uri,
    Clouds: Image.resolveAssetSource(cloudImage).uri,
    Clear: Image.resolveAssetSource(sunnyImage).uri,
  };

  const CImageUriArray = [
    Image.resolveAssetSource(CharacterOne).uri,
    Image.resolveAssetSource(CharacterTwo).uri,
    Image.resolveAssetSource(CharacterOne_2).uri,
    Image.resolveAssetSource(CharacterTwo_2).uri,
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState('tokyo');
  const [weather, setWeather] = useState<keyof BGUriArray>('Clear');

  // 天気のAPIから現在の天気を取得する関数
  const getWeatherInfo = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const weatherMain: keyof BGUriArray = data.weather[0].main;
        if (BGImageUriArray[weatherMain] !== undefined) setWeather(weatherMain);
        setIsLoading(false);
      })
      .catch(() => console.log('error'));
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <View style={MainScreenStyles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <View style={MainScreenStyles.backgoroundImageConteiner}>
            <Image
              source={{ uri: BGImageUriArray[weather] }}
              resizeMode='cover'
              style={MainScreenStyles.backgroundImage}
            />
          </View>

          <View style={MainScreenStyles.characterImageContainer}>
            <Image
              source={{ uri: CImageUriArray[Math.floor(Math.random() * 2)] }}
              resizeMode='contain'
              style={MainScreenStyles.characterImage}
            />
          </View>

          <View style={MainScreenStyles.TopLevelContainer}>
            <View style={MainScreenStyles.HeaderBtnGroup}>
              <View style={MainScreenStyles.HeaderBtn}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.settingBtn}
                  onPress={() => console.log('?')}
                >
                  <Text style={MainScreenStyles.settingBtnText}>?</Text>
                </TouchableOpacity>
              </View>

              <View style={MainScreenStyles.HeaderBtn}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.settingBtn}
                  onPress={() => console.log('#')}
                >
                  <Text style={MainScreenStyles.settingBtnText}>#</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={MainScreenStyles.BottomBtnGroup}>
              <View style={MainScreenStyles.BottomBtn}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.leftBtn}
                  onPress={() => console.log(1)}
                >
                  <Text style={MainScreenStyles.btnText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.centerBtn}
                  onPress={() => console.log(2)}
                >
                  <Text style={MainScreenStyles.btnText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.rightBtn}
                  onPress={() => console.log(3)}
                >
                  <Text style={MainScreenStyles.btnText}>3</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
