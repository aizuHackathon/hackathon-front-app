import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { genderStyles } from './GenderSelectStyles';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';

type RadioButtonProps = {
  gender: Gender;
  checkedGender: Gender;
  onSelect: (gender: Gender) => void;
};

enum Gender {
  Male = 'おとこ',
  Female = 'おんな',
  Other = 'そのた',
}

export const GenderSelect: React.FC = ({ navigation }) => {
  const [checkedGender, setCheckedGender] = useState<Gender>(Gender.Male);
  const gender: Array<Gender> = [Gender.Male, Gender.Female, Gender.Other];
  return (
    <View style={[genderStyles.container, { flexDirection: 'column' }]}>
      <View style={[genderStyles.container, { flex: 1 }]}>
        <Text>ここにHeader</Text>
      </View>
      <View style={[genderStyles.container, { flex: 2 }]}>
        {gender.map((gender) => {
          return (
            <RadioButton
              gender={gender}
              checkedGender={checkedGender}
              onSelect={setCheckedGender}
              key={gender}
            />
          );
        })}
      </View>
      <View style={[genderStyles.container, { flex: 1, flexDirection: 'row' }]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ProcessButton
            onClick={() => navigation.push('InitializeUserForm')}
            content={'もどる'}
          />
          <ProcessButton
            onClick={() => {
              console.log('hi');
            }}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};

const RadioButton: React.FC<RadioButtonProps> = ({
  gender,
  checkedGender,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={() => {
        onSelect(gender);
      }}
      style={genderStyles.option}
    >
      <View style={genderStyles.radioButton}>
        {gender === checkedGender && (
          <View style={genderStyles.isCheckedRadioButon} />
        )}
      </View>
      <Text style={genderStyles.text}>{gender}</Text>
    </Pressable>
  );
};
