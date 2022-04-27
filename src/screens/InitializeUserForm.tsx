import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { initializeUserFormStyles } from './InitializeUserFormStyles';
import { ProcessButton } from '../components/ProcessButton/ProcessButton';

type InitializeUserData = {
  name: string;
  height: number;
  weight: number;
  age: number;
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

  console.log(initializeUserData);
  return (
    <View
      style={[initializeUserFormStyles.container, { flexDirection: 'column' }]}
    >
      <View style={{ flex: 1 }}>
        <Text style={initializeUserFormStyles.text}>おなまえ</Text>
        <TextInput
          placeholder='筋肉太郎'
          onChangeText={onChangeName}
          value={name}
          style={initializeUserFormStyles.form}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={initializeUserFormStyles.text}>しんちょう</Text>
        <TextInput
          placeholder='Type here'
          onChangeText={onChangeHeight}
          value={height}
          style={initializeUserFormStyles.form}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={initializeUserFormStyles.text}>たいじゅう</Text>
        <TextInput
          placeholder='Type here'
          onChangeText={onChangeWeight}
          value={weight}
          style={initializeUserFormStyles.form}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={initializeUserFormStyles.text}>ねんれい</Text>
        <TextInput
          placeholder='Type here'
          onChangeText={onChangeAge}
          value={age}
          style={initializeUserFormStyles.form}
        />
      </View>
      <ProcessButton
        onClick={() => navigation.push('GenderSelect')}
        content={'つぎへ'}
      />
    </View>
  );
};
