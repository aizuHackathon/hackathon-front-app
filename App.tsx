import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserFormPartOne } from './src/screens/UserFormPartOne/UserFormPartOne';
import { UserFormPartTwo } from './src/screens/UserFormPartTwo/UserFormPartTwo';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';

type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;

const App: React.VFC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='UserFormPartOne' component={UserFormPartOne} />
      <Stack.Screen name='UserFormPartTwo' component={UserFormPartTwo} />
      <Stack.Screen name='MainScreen' component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
