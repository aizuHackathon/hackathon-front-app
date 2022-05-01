import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { UserFormPartTwoStyles } from './UserFormPartTwoStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';

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

export const UserFormPartTwo: React.FC<Navigation> = ({ navigation }) => {
  const [checkedGender, setCheckedGender] = useState<Gender>(Gender.Male);
  const gender: Array<Gender> = [Gender.Male, Gender.Female, Gender.Other];
  return (
    <View
      style={[UserFormPartTwoStyles.container, { flexDirection: 'column' }]}
    >
      <View style={[UserFormPartTwoStyles.container, { flex: 1 }]}>
        <Text>ここにHeader</Text>
      </View>
      <View style={[UserFormPartTwoStyles.container, { flex: 2 }]}>
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
      <View
        style={[
          UserFormPartTwoStyles.container,
          { flex: 1, flexDirection: 'row' },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ProcessButton
            onClick={() => navigation.goBack()}
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
      style={UserFormPartTwoStyles.option}
    >
      <View style={UserFormPartTwoStyles.radioButton}>
        {gender === checkedGender && (
          <View style={UserFormPartTwoStyles.isCheckedRadioButon} />
        )}
      </View>
      <Text style={UserFormPartTwoStyles.text}>{gender}</Text>
    </Pressable>
  );
};
