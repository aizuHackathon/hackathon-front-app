import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MealRegisterScreenStyles } from './MealRegisterScreenStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';
import SelectDropdown from 'react-native-select-dropdown';
import { useForm, Controller } from 'react-hook-form';
import { BACKEND_API_URI } from '@env';
import { ErrorMessage } from '@hookform/error-message';

type data = {
  mealType: '';
  calorieDetail: '';
};

export const MealRegisterScreen: React.FC<Navigation> = ({ navigation }) => {
  // https://allabout.co.jp/gm/gc/24484/
  // 上記サイトから、平均として算出
  const calorieOfMeal = {
    ごはん: 400,
    パン: 300,
    めん: 200,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mealType: '',
      calorieDetail: '',
    },
  });

  const onSubmit = async (data: data) => {
    const finalCalorie =
      data.calorieDetail.length > 0
        ? data.calorieDetail
        : calorieOfMeal[data.mealType];
    const url = `${BACKEND_API_URI}/calorie?id=2&calorie_type=0&calorie=${finalCalorie}`;
    const form_data = new FormData();

    Object.keys(data).forEach((key: string) => {
      form_data.append(key, data[key]);
    });

    const requestOptions = {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    };

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log('error', error));

    navigation.navigate('MainScreen');
  };

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
          <Controller
            name='mealType'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'かならずえらんでね！',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectDropdown
                data={Object.keys(calorieOfMeal)}
                defaultButtonText={'しょくじのしゅるいをえらぶ'}
                buttonStyle={MealRegisterScreenStyles.form}
                buttonTextStyle={MealRegisterScreenStyles.buttonText}
                dropdownIconPosition={'right'}
                onSelect={onChange}
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
            )}
          />
        </View>
        <ErrorMessage
          errors={errors}
          name='mealType'
          render={({ message }) => (
            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                textAlign: 'center',
              }}
            >
              {message}
            </Text>
          )}
        />

        <Text style={MealRegisterScreenStyles.text}>くわしく</Text>
        <Controller
          name='calorieDetail'
          control={control}
          rules={{
            pattern: {
              value: /\d+/g,
              message: 'すうじをいれてね！',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize='none'
              textAlign='center'
              maxLength={4}
              onChangeText={onChange}
              onBlur={onBlur}
              style={MealRegisterScreenStyles.form}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name='calorieDetail'
          render={({ message }) => (
            <Text
              style={{ fontWeight: 'bold', color: 'red', textAlign: 'center' }}
            >
              {message}
            </Text>
          )}
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
            onClick={handleSubmit(onSubmit)}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};
