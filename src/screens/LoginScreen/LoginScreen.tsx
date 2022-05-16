import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { LoginScreenStyles } from './LoginScreenStyle';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';

export const LoginScreen: React.FC<Navigation> = ({ navigation }) => {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
          <Text style={LoginScreenStyles.text}>にっくねーむ</Text>
          <TextInput
            onChangeText={setUserID}
            value={userID}
            style={LoginScreenStyles.form}
          />
        </View>
        <View style={LoginScreenStyles.inputTextForm}>
          <Text style={LoginScreenStyles.text}>ぱすわーど</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={LoginScreenStyles.form}
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
            onClick={() => navigation.navigate('MainScreen')}
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
