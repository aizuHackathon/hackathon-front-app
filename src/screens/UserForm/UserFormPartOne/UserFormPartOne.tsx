import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { UserFormPartOneStyles } from './UserFormPartOneStyle';
import { ProcessButton } from '../../../components/ProcessButton/ProcessButton';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { BACKEND_API_URI } from '@env';
import { FormProps } from '../UserForm';

export const UserFormPartOne: React.FC<FormProps> = ({
  navigation,
  handleSubmit,
  control,
  errors,
}) => {
  type data = {
    name: string;
    password: string;
    height: string;
    weight: string;
    age: string;
    sex: string;
  };

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = async (data: data) => {
    const url = `${BACKEND_API_URI}/name?name=${data.name}`;

    let isDepricated = false;
    await fetch(url)
      .then((response) => response.json())
      .then((result) => {
        isDepricated = !(result == null);
      })
      .catch((e) => console.error(e));
    if (isDepricated) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      navigation.navigate('UserFormPartTwo');
    }
  };

  const ErrorMessages = {
    REQUIRED: 'かならずいれててね！',
    ENGLISH_ONLY: 'ローマじかすうじをいれてね！',
    NUMBER_ONLY: 'すうじをいれてね！',
  };

  return (
    <View
      style={[
        UserFormPartOneStyles.container,
        { flexDirection: 'column', backgroundColor: '#E7C0C0' },
      ]}
    >
      <View style={UserFormPartOneStyles.container}>
        <Text>Header</Text>
      </View>

      <View style={[UserFormPartOneStyles.container, { flex: 5 }]}>
        <View style={UserFormPartOneStyles.inputTextForm}>
          {showErrorMessage && (
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 5,
              }}
            >
              ほかのひとがつかってっているから、{'\n'}
              このユーザーネームはつかえません！
            </Text>
          )}
          <Text>{''}</Text>
          <Text style={UserFormPartOneStyles.text}>ユーザーネーム</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                maxLength={10}
                autoCapitalize={'none'}
                textContentType={'username'}
                textAlign={'center'}
                style={UserFormPartOneStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name={'name'}
            rules={{
              required: {
                value: true,
                message: ErrorMessages.REQUIRED,
              },
              pattern: {
                value: /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/,
                message: ErrorMessages.ENGLISH_ONLY,
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='name'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
        <View style={UserFormPartOneStyles.inputTextForm}>
          <Text style={UserFormPartOneStyles.text}>パスワード</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                maxLength={10}
                autoCapitalize={'none'}
                textContentType={'password'}
                textAlign={'center'}
                style={UserFormPartOneStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry={true}
              />
            )}
            name={'pass'}
            rules={{
              required: {
                value: true,
                message: ErrorMessages.REQUIRED,
              },
              pattern: {
                value: /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/,
                message: ErrorMessages.ENGLISH_ONLY,
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='pass'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
        <View style={UserFormPartOneStyles.inputTextForm}>
          <Text style={UserFormPartOneStyles.text}>しんちょう</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                maxLength={3}
                autoCapitalize={'none'}
                textAlign={'center'}
                style={UserFormPartOneStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name={'height'}
            rules={{
              required: {
                value: true,
                message: ErrorMessages.REQUIRED,
              },
              pattern: {
                value: /^[0-9]*$/,
                message: ErrorMessages.NUMBER_ONLY,
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='height'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
        <View style={UserFormPartOneStyles.inputTextForm}>
          <Text style={UserFormPartOneStyles.text}>たいじゅう</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                maxLength={3}
                autoCapitalize={'none'}
                textAlign={'center'}
                style={UserFormPartOneStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name={'weight'}
            rules={{
              required: {
                value: true,
                message: ErrorMessages.NUMBER_ONLY,
              },
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
        <View style={UserFormPartOneStyles.inputTextForm}>
          <Text style={UserFormPartOneStyles.text}>ねんれい</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                maxLength={3}
                autoCapitalize={'none'}
                textAlign={'center'}
                style={UserFormPartOneStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name={'old'}
            rules={{
              required: {
                value: true,
                message: ErrorMessages.REQUIRED,
              },
              pattern: {
                value: /^[0-9]*$/,
                message: ErrorMessages.NUMBER_ONLY,
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='old'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
      </View>
      <View style={UserFormPartOneStyles.container}>
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
          <ProcessButton onClick={handleSubmit(onSubmit)} content={'つぎへ'} />
        </View>
      </View>
    </View>
  );
};
