import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserFormPartOne } from './src/screens/UserFormPartOne/UserFormPartOne';
import { UserFormPartTwo } from './src/screens/UserFormPartTwo/UserFormPartTwo';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { LogChart } from './src/screens/LogChart/LogChart';
import { Evolution } from './src/screens/EvolutionScreen/Evolution';

type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;

const App: React.VFC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='UserFormPartOne'>
      <Stack.Screen
        name='UserFormPartOne'
        component={UserFormPartOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='UserFormPartTwo'
        component={UserFormPartTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MainScreen'
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='LogChart' component={LogChart} />
      <Stack.Screen
        name='Evolution'
        component={Evolution}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
