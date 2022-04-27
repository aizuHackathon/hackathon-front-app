import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/Details';
import { GenderSelect } from './src/screens/GenderSelect/GenderSelect';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;

const App: React.VFC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='GenderSelect'>
      <Stack.Screen name='GenderSelect' component={GenderSelect} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
