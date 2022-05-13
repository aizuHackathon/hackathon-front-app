import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MealRegisterScreenStyles } from './MealRegisterScreenStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';
import { Picker } from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import { buttonStyles } from '../../components/ProcessButton/ProcessButtonStyles';

export const MealRegisterScreen: React.FC<Navigation> = ({ navigation }) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <View
      style={[
        MealRegisterScreenStyles.container,
        { backgroundColor: '#E7C0C0' },
      ]}
    >
      <View style={MealRegisterScreenStyles.MealRegisterHeaderContainer}>
        <Text style={MealRegisterScreenStyles.text}>おしょくじとうろく</Text>
      </View>

      <View style={[MealRegisterScreenStyles.container, { flex: 2 }]}>
        <Text style={MealRegisterScreenStyles.text}>しゅるい</Text>
        <SelectDropdown
          data={countries}
          buttonStyle={MealRegisterScreenStyles.form}
          buttonTextStyle={MealRegisterScreenStyles.buttonText}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <Text style={MealRegisterScreenStyles.text}>ないよう</Text>
        <SelectDropdown
          data={countries}
          buttonStyle={MealRegisterScreenStyles.form}
          buttonTextStyle={MealRegisterScreenStyles.buttonText}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
      <View style={MealRegisterScreenStyles.MealRegisterFooterContainer}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <ProcessButton
            onClick={() => navigation.goBack()}
            content={'もどる'}
          />
          <ProcessButton
            onClick={() => {
              // if(validete()) navigation.navigate('MainScreen');
              navigation.navigate('MainScreen');
            }}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};
