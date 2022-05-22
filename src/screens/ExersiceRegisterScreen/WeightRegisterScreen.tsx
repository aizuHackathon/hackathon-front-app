import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { WeightRegisterScreenStyles } from './WeightRegisterScreenStyles';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import SelectDropdown from 'react-native-select-dropdown';
import { Navigation } from '../screan';
import { useForm, Controller } from 'react-hook-form';
import { BACKEND_API_URI } from '@env';
import { userIdContext } from '../../components/context';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorMessages } from '../CONSTANTS';

type WeightRgisterProps = {
  navigation: Navigation;
  route: { params: { totalSeconds: number } };
};

type data = {
  exerciseType: '';
  weight: '';
};

export const WeightRegisterScreen: React.FC<WeightRgisterProps> = ({
  navigation,
  route,
}) => {
  const { totalSeconds } = route.params; //運動時間

  const convertTimeToString = (): string => {
    let printTime;
    let second = totalSeconds / 1000; //秒に変換
    let minutes;
    let hour;
    if (second >= 60 && 3600 > second) {
      minutes = Math.floor(second / 60);
      second = second % 60;
      printTime = minutes + '分' + second + '秒';
    } else if (second >= 3600) {
      hour = Math.floor(second / 3600);
      minutes = Math.floor(second / 60);
      second = second % 60;
      printTime = hour + '時間' + minutes + '分' + second + '秒';
    } else {
      printTime = second + '秒';
    }
    return printTime;
  };

  const { userId } = useContext(userIdContext);

  // https:www.morinaga.co.jp/protein/columns/detail/?id=75&category=muscle
  // 上記サイトから、算出
  const getTotalExerciseCalorie = (exersiceType: number): number => {
    // METs × 体重（kg） × 時間 × 1.05
    if (exersiceType === 1) {
      return 2.5 * 60 * (totalSeconds / 3600) * 1.05;
    }
    return 3.5 * 60 * (totalSeconds / 3600) * 1.05;
  };

  const typeOfExercise = {
    ゆうさんそうんどう: 1,
    むさんそうんどう: 2,
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exerciseType: '',
      weight: '',
    },
  });

  const onSubmit = async (data: data) => {
    // 切り捨てしたカロリー
    const calorie = Math.floor(
      getTotalExerciseCalorie(typeOfExercise[data['exerciseType']]),
    );
    const url = `${BACKEND_API_URI}/calorie?id=${userId}&calorie_type=1&calorie=${calorie}`;
    const form_data = new FormData();

    form_data.append('calorie', data['calorie']);

    const requestOptions = {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    };

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log('error', error));

    if (data.weight.length > 0) {
      const wUrl = `${BACKEND_API_URI}/weight?id=${userId}&weight=${data.weight}`;
      const form_data = new FormData();

      form_data.append('weight', data['weight']);

      const requestOptions = {
        method: 'POST',
        body: form_data,
        redirect: 'follow',
      };

      await fetch(wUrl, requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log('error', error));
    }
    navigation.navigate('MainScreen');
  };

  return (
    <View
      style={[
        WeightRegisterScreenStyles.container,
        { flexDirection: 'column', backgroundColor: '#E7C0C0' },
      ]}
    >
      <View style={[WeightRegisterScreenStyles.container, { flex: 1 }]}>
        <Text style={WeightRegisterScreenStyles.text}>
          {convertTimeToString()}
        </Text>
      </View>

      <View style={[WeightRegisterScreenStyles.container, { flex: 2 }]}>
        <Text style={WeightRegisterScreenStyles.text}>しゅるい</Text>
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
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <SelectDropdown
                data={Object.keys(typeOfExercise)}
                defaultButtonText={'うんどうのしゅるいをえらぶ'}
                buttonStyle={WeightRegisterScreenStyles.form}
                buttonTextStyle={WeightRegisterScreenStyles.buttonText}
                dropdownIconPosition={'right'}
                onSelect={onChange}
                onBlur={onBlur}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item) => {
                  return item;
                }}
              />
            )}
            name={'exerciseType'}
            rules={{
              required: {
                value: true,
                message: ErrorMessages.REQUIRED_OPTIONS,
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='exerciseType'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
        <View style={WeightRegisterScreenStyles.inputTextForm}>
          <Text style={WeightRegisterScreenStyles.text}>たいじゅう</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                maxLength={3}
                textAlign={'center'}
                autoCapitalize={'none'}
                onChangeText={(value) => onChange(value)}
                style={WeightRegisterScreenStyles.form}
              />
            )}
            name={'weight'}
            rules={{
              pattern: {
                value: /^[0-9]*$/,
                message: ErrorMessages.NUMBER_ONLY,
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='weight'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
      </View>
      <View style={WeightRegisterScreenStyles.container}>
        <View
          style={{
            position: 'absolute',
            right: '17%',
          }}
        >
          <ProcessButton
            onClick={() => navigation.goBack()}
            content={'もどる'}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: '17%',
          }}
        >
          <ProcessButton
            onClick={handleSubmit(onSubmit)}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};
