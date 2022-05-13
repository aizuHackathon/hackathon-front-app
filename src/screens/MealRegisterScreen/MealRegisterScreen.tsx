import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MealRegisterScreenStyles } from './MealRegisterScreenStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';
import { Picker } from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import { buttonStyles } from '../../components/ProcessButton/ProcessButtonStyles';

export const MealRegisterScreen: React.FC<Navigation> = ({ navigation }) => {
  const caloryOfMeal = {
    ごはん: 100,
    パン: 200,
    めん: 300,
  };
  const [selectedCalory, setSelectedCalory] = useState<string>();

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
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            borderRadius: 10,
          }}
        >
          <SelectDropdown
            data={Object.keys(caloryOfMeal)}
            defaultButtonText={'しょくじのしゅるいをえらぶ'}
            buttonStyle={MealRegisterScreenStyles.form}
            buttonTextStyle={MealRegisterScreenStyles.buttonText}
            dropdownIconPosition={'right'}
            onSelect={(selectedItem: string) => {
              setSelectedCalory(caloryOfMeal[selectedItem]);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>

        <Text style={MealRegisterScreenStyles.text}>くわしく</Text>
        <TextInput
          onChangeText={setSelectedCalory}
          style={MealRegisterScreenStyles.form}
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
              console.log(selectedCalory);
              navigation.navigate('MainScreen');
            }}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};
