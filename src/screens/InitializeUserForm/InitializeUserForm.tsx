import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { initializeUserFormStyles } from './InitializeUserFormStyles';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';

type InitializeUserData = {
  name: string;
  height: number;
  weight: number;
  age: number;
};

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

export const InitializeUserForm: React.FC = ({ navigation }) => {
  const initializeUserData: InitializeUserData = {
    name: '',
    height: 0,
    weight: 0,
    age: 0,
  };
  const [name, onChangeName] = useState<string>('');
  const [height, onChangeHeight] = useState<string>('');
  const [weight, onChangeWeight] = useState<string>('');
  const [age, onChangeAge] = useState<string>('');

  initializeUserData.name = name;
  if (!isNaN(Number(height))) {
    initializeUserData.height = Number(height);
  }
  if (!isNaN(Number(weight))) {
    initializeUserData.weight = Number(weight);
  }
  if (!isNaN(Number(age))) {
    initializeUserData.age = Number(age);
  }

  const initializeForm: Array<InitializeForm> = [
    {
      formTitle: UserInfo.Name,
      onChangeMethod: onChangeName,
      value: name,
    },
    {
      formTitle: UserInfo.Height,
      onChangeMethod: onChangeHeight,
      value: height,
    },
    {
      formTitle: UserInfo.Weight,
      onChangeMethod: onChangeWeight,
      value: weight,
    },
    {
      formTitle: UserInfo.Age,
      onChangeMethod: onChangeAge,
      value: age,
    },
  ];

  console.log(initializeUserData);

  return (
    <View style={initializeUserFormStyles.container}>
      {initializeForm.map((object) => {
        return (
          <View
            style={initializeUserFormStyles.inputTextForm}
            key={object.formTitle}
          >
            <Text style={initializeUserFormStyles.text}>
              {object.formTitle}
            </Text>
            <TextInput
              placeholder={object.formTitle === UserInfo.Name ? '筋肉太郎' : ''}
              onChangeText={object.onChangeMethod}
              value={object.value}
              style={initializeUserFormStyles.form}
            />
          </View>
        );
      })}
      <ProcessButton
        onClick={() => navigation.push('GenderSelect')}
        content={'つぎへ'}
        style={{ marginTop: 40 }}
      />
    </View>
  );
};
