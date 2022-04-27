import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

type InitializeUserData = {
  name: string;
  height: number;
  weight: number;
  age: number;
};

const InitializeUserFormScreen: React.FC = ({ navigation }) => {
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>おなまえ</Text>
      <TextInput
        placeholder='筋肉太郎'
        onChangeText={onChangeName}
        value={name}
      />
      <Text>しんちょう</Text>
      <TextInput
        placeholder='Type here'
        onChangeText={onChangeHeight}
        value={height}
      />
      <Text>たいじゅう</Text>
      <TextInput
        placeholder='Type here'
        onChangeText={onChangeWeight}
        value={weight}
      />
      <Text>ねんれい</Text>
      <TextInput
        placeholder='Type here'
        onChangeText={onChangeAge}
        value={age}
      />
      <Button
        title='つぎへ'
        onPress={() => navigation.push('InitializeUserForm')}
      />
    </View>
  );
};

export default InitializeUserFormScreen;
