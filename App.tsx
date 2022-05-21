import React, { useState, createContext, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterForm } from './src/screens/UserForm/UserForm';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';
import { userIdContext } from './src/components/context';

type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;

const App: React.FC = () => {
  const [userId, setUserId] = useState<string>();
  const userIdValue = useMemo(() => ({ userId, setUserId }), [userId]);
  return (
    <userIdContext.Provider value={userIdValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='RegisterScreen'
            component={RegisterForm}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='MainScreen'
            component={MainScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </userIdContext.Provider>
  );
};

export default App;
