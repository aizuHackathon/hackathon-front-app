import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { UserFormPartOneStyles } from './UserFormPartOneStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';
import { Audio } from 'expo-av';
// @ts-expect-error mp3ファイルを読み込めないと言われてしまう
import Morning from '../../../assets/sounds/morning.mp3';

enum UserInfo {
  Name = 'おなまえ',
  Height = 'しんちょう',
  Weight = 'たいじゅう',
  Age = 'ねんれい',
}

type InitializeForm = {
  formTitle: UserInfo;
  onChangeMethod: (arg0: string) => void;
  value: string;
};

export const UserFormPartOne: React.FC<Navigation> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const initializeForm: Array<InitializeForm> = [
    {
      formTitle: UserInfo.Name,
      onChangeMethod: setName,
      value: name,
    },
    {
      formTitle: UserInfo.Height,
      onChangeMethod: setHeight,
      value: height,
    },
    {
      formTitle: UserInfo.Weight,
      onChangeMethod: setWeight,
      value: weight,
    },
    {
      formTitle: UserInfo.Age,
      onChangeMethod: setAge,
      value: age,
    },
  ];

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(Morning);
    await sound.playAsync();
    await sound.setIsLoopingAsync(true);
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <View
      style={[
        UserFormPartOneStyles.container,
        { flexDirection: 'column', backgroundColor: '#E7C0C0' },
      ]}
    >
      <View style={UserFormPartOneStyles.container}>
        <Text>Header</Text>
      </View>

      <View style={[UserFormPartOneStyles.container, { flex: 2 }]}>
        {initializeForm.map((object) => {
          return (
            <View
              style={UserFormPartOneStyles.inputTextForm}
              key={object.formTitle}
            >
              <Text style={UserFormPartOneStyles.text}>{object.formTitle}</Text>
              <TextInput
                onChangeText={object.onChangeMethod}
                value={object.value}
                style={UserFormPartOneStyles.form}
              />
            </View>
          );
        })}
      </View>
      <View style={UserFormPartOneStyles.container}>
        <View
          style={{
            position: 'absolute',
            left: '17%',
          }}
        >
          <ProcessButton
            onClick={() => navigation.navigate('UserFormPartTwo')}
            content={'つぎへ'}
          />
        </View>
      </View>
    </View>
  );
};
