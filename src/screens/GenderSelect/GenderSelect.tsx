import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { genderStyles } from './GenderSelectStyles';

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

export const GenderSelect: React.FC = () => {
  const [checkedGender, setCheckedGender] = useState<Gender>(Gender.Male);
  const gender: Array<Gender> = [Gender.Male, Gender.Female, Gender.Other];
  return (
    <View style={genderStyles.container}>
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
      <GoBackButton onClick={() => console.log('hi')} />
      <SubmitButton onClick={() => console.log('hi')} />
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

const SubmitButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={genderStyles.goToBackButton}>
      <Text style={genderStyles.buttonText}>もどる</Text>
    </TouchableOpacity>
  );
};
const GoBackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={genderStyles.goToNextButton}>
      <Text style={genderStyles.buttonText}>かくてい</Text>
    </TouchableOpacity>
  );
};
