import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitializeUserFormScreen from './src/screens/InitializeUserForm';
import { GenderSelect } from './src/screens/GenderSelect/GenderSelect';

type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;

const App: React.VFC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='GenderSelect'>
      <Stack.Screen name='GenderSelect' component={GenderSelect} />
      <Stack.Screen
        name='InitializeUserForm'
        component={InitializeUserFormScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
