import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { UserFormPartOneStyles } from './UserFormPartOneStyle';
import { ProcessButton } from '../../../components/ProcessButton/ProcessButton';
import { Navigation } from '../../screan';
import { useForm, Controller } from 'react-hook-form';
import { BACKEND_API_URI } from '@env';
import { userIdContext } from '../../../components/context';
import { ErrorMessage } from '@hookform/error-message';

type FormProps = {
  color: string;
} & Navigation;

export const UserFormPartOne: React.FC<FormProps> = ({ navigation, color }) => {
  const UserInfo = {
    Name: 'にっくねーむ',
    Password: 'ぱすわーど',
    Height: 'しんちょう',
    Weight: 'たいじゅう',
    Age: 'ねんれい',
  };
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userId: '',
      password: '',
    },
  });
  useEffect(() => {
    console.log(color);
  }, []);
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

      <View style={[UserFormPartOneStyles.container, { flex: 3 }]}>
        <View style={UserFormPartOneStyles.inputTextForm}>
          <Text style={UserFormPartOneStyles.text}>aaa</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCapitalize={'none'}
                textContentType={'username'}
                textAlign={'center'}
                style={UserFormPartOneStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name={'userId'}
            rules={{
              required: {
                value: true,
                message: 'ぜったいにゅうりょくしてね！',
              },
              pattern: {
                value: /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/,
                message: 'ローマじかすうじでいれてね！',
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='userId'
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
            left: '17%',
          }}
        >
          <ProcessButton
            onClick={() => navigation.navigate('UserFormPartTwo')}
            content={'つぎへ'}
          />
        </View>
      </View>
    </View>
  );
};
