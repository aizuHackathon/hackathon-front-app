import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserFormPartOne } from './src/screens/UserFormPartOne/UserFormPartOne';
import { UserFormPartTwo } from './src/screens/UserFormPartTwo/UserFormPartTwo';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { ExersiceRegisterScreen } from './src/screens/ExersiceRegisterScreen/ExersiceRegisterScreen';
import { WeightRegisterScreen } from './src/screens/ExersiceRegisterScreen/WeightRegisterScreen';

export type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
  ExersiceRegisterScreen: { time: number };
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;
const Tab = createNativeStackNavigator<RootStackParamList>() as any;
const Exersice: React.VFC = () => {
  return (
    <Tab.Navigator initialRouteName='ExersiceRegisterScreen'>
      <Tab.Screen
        name='ExersiceRegisterScreen'
        component={ExersiceRegisterScreen}
      />
      <Tab.Screen
        name='WeightRegisterScreen'
        component={WeightRegisterScreen}
      />
    </Tab.Navigator>
  );
};

const App: React.VFC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='UserFormPartOne'>
      <Stack.Screen name='UserFormPartOne' component={UserFormPartOne} />
      <Stack.Screen name='UserFormPartTwo' component={UserFormPartTwo} />
      <Stack.Screen name='MainScreen' component={MainScreen} />
      <Stack.Screen
        name='ExersiceRegisterScreen'
        component={Exersice}
        options={{ headerShown: false }} // 最終的すべてのスクリーンにこれを適用する
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
