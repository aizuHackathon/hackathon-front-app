import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Navigation } from '../screan';
import { MainScreenStyles } from './MainScreenStyle';
import { Loading } from '../../components/Loading/Loading';
import FadeInOut from 'react-native-fade-in-out';
import rainyImage from '../../../assets/images/rainy.jpg';
import cloudImage from '../../../assets/images/cloudy.jpg';
import sunnyImage from '../../../assets/images/sunny.jpg';
import CharacterOne from '../../../assets/images/character_1.png';
import CharacterTwo from '../../../assets/images/character_2.png';
import CharacterOne_2 from '../../../assets/images/character1_2.png';
import CharacterTwo_2 from '../../../assets/images/character2_2.png';
import Diet from '../../../assets/images/diet.jpg';
import Graph1 from '../../../assets/images/graph1.jpg';
import Sports from '../../../assets/images/sport.jpg';
import { WEATHER_API_KEY } from '@env';

export const MainScreen: React.FC<Navigation> = ({ navigation }) => {
  type BGImageUriObjectType = {
    Rain: string;
    Clouds: string;
    Clear: string;
  };

  const BGImageUriObject: BGImageUriObjectType = {
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
  const [weather, setWeather] = useState('Clear');
  const [isTimeout, setIsTimeout] = useState(false);
  const [characterWord, setCharacterWord] = useState(10000000000);

  // 天気のAPIから現在の天気を取得する関数
  const getWeatherInfo = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (BGImageUriObject[data.weather[0].main] !== undefined) {
          setWeather(data.weather[0].main);
        }
        setIsLoading(false);
      })
      .catch((error) => console.error('通信に失敗しました', error));
  };

  useEffect(() => {
    getWeatherInfo();

    const updateWordsBy3s = setInterval(() => {
      setIsTimeout(!isTimeout);
      if (!isTimeout) setCharacterWord(Math.floor(Math.random() * 10000000000));
    }, 5000);

    return () => {
      clearInterval(updateWordsBy3s);
    };
  }, [isTimeout]);

  return (
    <View style={MainScreenStyles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          {/*
            背景レイヤー
            z-index : -1
          */}
          <View style={MainScreenStyles.backgoroundImageConteiner}>
            <Image
              source={{ uri: BGImageUriObject[weather] }}
              resizeMode='cover'
              style={MainScreenStyles.backgroundImage}
            />
          </View>

          {/*
            キャラクターレイヤー
            z-index : 0
          */}
          <View style={MainScreenStyles.characterImageContainer}>
            <FadeInOut visible={isTimeout} scale={true}>
              <View style={MainScreenStyles.rectangle}>
                <Text style={MainScreenStyles.hukidashiInnerText}>
                  {characterWord}
                </Text>
              </View>
              <View style={MainScreenStyles.triangle} />
            </FadeInOut>

            <Image
              // ↓ランダムの場合
              // source={{ uri: CImageUriArray[Math.floor(Math.random() * 2)] }}
              source={{ uri: CImageUriArray[0] }}
              resizeMode='contain'
              style={MainScreenStyles.characterImage}
            />
          </View>

          {/*
            ボタン群レイヤー
            z-index : 1
          */}
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
                  onPress={() => navigation.navigate('Evolution')}
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
                  <Image
                    source={{
                      uri: Image.resolveAssetSource(Diet).uri,
                    }}
                    resizeMode='contain'
                    style={MainScreenStyles.btnText}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.centerBtn}
                  onPress={() => navigation.navigate('LogChart')}
                >
                  <Image
                    source={{
                      uri: Image.resolveAssetSource(Graph1).uri,
                    }}
                    resizeMode='contain'
                    style={MainScreenStyles.btnText}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={MainScreenStyles.rightBtn}
                  onPress={() => console.log(3)}
                >
                  <Image
                    source={{
                      uri: Image.resolveAssetSource(Sports).uri,
                    }}
                    resizeMode='contain'
                    style={MainScreenStyles.btnText}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
