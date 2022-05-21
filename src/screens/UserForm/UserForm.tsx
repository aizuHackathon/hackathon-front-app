import React, { useState, useMemo, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BACKEND_API_URI } from '@env';
import { userIdContext } from '../../components/context';
import { ErrorMessage } from '@hookform/error-message';
import { UserFormPartOne } from './UserFormPartOne/UserFormPartOne';
import { UserFormPartTwo } from './UserFormPartTwo/UserFormPartTwo';

type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Form = createNativeStackNavigator<RootStackParamList>() as any;

export const RegisterForm: React.FC = () => {
  const { setUserId } = useContext(userIdContext);
  return (
    <Form.Navigator initialRouteName='UserFormPartOne'>
      <Form.Screen name='UserFormPartOne'>
        {(props) => <UserFormPartOne {...props} color={'aaa'} />}
      </Form.Screen>
      <Form.Screen name='UserFormPartTwo' component={UserFormPartTwo} />
    </Form.Navigator>
  );
};
