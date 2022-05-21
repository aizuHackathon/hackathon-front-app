import React, { useContext, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { LoginScreenStyles } from './LoginScreenStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';
import { useForm, Controller } from 'react-hook-form';
import { BACKEND_API_URI } from '@env';
import { userIdContext } from '../../components/context';
import { ErrorMessage } from '@hookform/error-message';

export const LoginScreen: React.FC<Navigation> = ({ navigation }) => {
  const { userId, setUserId } = useContext(userIdContext);
  const [isFailed, setIsFailed] = useState(false);
  type data = {
    userId: string;
    password: string;
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

  const onSubmit = async (data: data) => {
    const url = `${BACKEND_API_URI}/login?name=${data.userId}&pass=${data.password}`;
    let isSuccess;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.id === undefined) {
          isSuccess = false;
        } else {
          isSuccess = true;
        }
        setUserId(data.id);
      })
      .catch((e) => console.error(e));
    console.log(userId);

    if (isSuccess) {
      reset();
      navigation.navigate('MainScreen');
    } else {
      setIsFailed(true);
    }
  };

  return (
    <View
      style={[
        LoginScreenStyles.container,
        { flexDirection: 'column', backgroundColor: '#E7C0C0' },
      ]}
    >
      <View style={LoginScreenStyles.container}>
        <Text style={LoginScreenStyles.text}>ログイン</Text>
      </View>

      <View
        style={[
          LoginScreenStyles.container,
          { flex: 2, width: '100%', height: '100%' },
        ]}
      >
        <View style={LoginScreenStyles.inputTextForm}>
          {isFailed && (
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 5,
              }}
            >
              どちらかがまちがっているよ！
            </Text>
          )}
          <Text style={LoginScreenStyles.text}>ユーザーネーム</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCapitalize={'none'}
                textContentType={'username'}
                textAlign={'center'}
                style={LoginScreenStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name='userId'
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
        <View style={LoginScreenStyles.inputTextForm}>
          <Text style={LoginScreenStyles.text}>パスワード</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                autoCapitalize={'none'}
                textAlign={'center'}
                secureTextEntry={true}
                style={LoginScreenStyles.form}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
            name='password'
            rules={{
              required: {
                value: true,
                message: 'ぜったいにゅうりょくしてね！',
              },
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: 'ローマじをいれてね',
              },
            }}
          />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => (
              <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
                {message}
              </Text>
            )}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            right: '17%',
            bottom: 0,
          }}
        >
          <ProcessButton
            onClick={handleSubmit(onSubmit)}
            content={'ログイン'}
          />
        </View>
      </View>
      <View style={LoginScreenStyles.container}>
        <View
          style={{
            position: 'absolute',
            left: '17%',
          }}
        >
          <ProcessButton
            onClick={() => navigation.navigate('UserFormPartOne')}
            content={'とうろく'}
          />
        </View>
      </View>
    </View>
  );
};
