import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterForm } from './src/screens/UserForm/UserForm';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { ExersiceRegisterScreen } from './src/screens/ExersiceRegisterScreen/ExersiceRegisterScreen';
import { WeightRegisterScreen } from './src/screens/ExersiceRegisterScreen/WeightRegisterScreen';
import { MealRegisterScreen } from './src/screens/MealRegisterScreen/MealRegisterScreen';
import { LogChart } from './src/screens/LogChart/LogChart';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';
import { userIdContext, userEvolutionContext } from './src/components/context';
import { Evolution } from './src/screens/EvolutionScreen/Evolution';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
  MealRegisterScreen: undefined;
  LogChart: undefined;
  ExersiceRegisterScreen: undefined;
  Evolution: undefined;
};

export type RootTabParamList = {
  ExersiceRegisterScreen: undefined;
  WeightRegisterScreen: { totalSeconds: number };
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Stack = createNativeStackNavigator<RootStackParamList>() as any;
const Tab = createNativeStackNavigator<RootTabParamList>() as any;
const Exersice: React.VFC = () => {
  return (
    <Tab.Navigator initialRouteName='ExersiceRegisterScreenTwo'>
      <Tab.Screen
        name='ExersiceRegisterScreenTwo'
        component={ExersiceRegisterScreen}
      />
      <Tab.Screen
        name='WeightRegisterScreen'
        component={WeightRegisterScreen}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  const [userId, setUserId] = useState<string>();
  const userIdValue = useMemo(() => ({ userId, setUserId }), [userId]);
  const [userIsEvoluted, setUserIsEvoluted] = useState('0');
  const userEvoluationValue = useMemo(
    () => ({ userIsEvoluted, setUserIsEvoluted }),
    [userIsEvoluted],
  );
  return (
    <userIdContext.Provider value={userIdValue}>
      <userEvolutionContext.Provider value={userEvoluationValue}>
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

            <Stack.Screen
              name='MealRegisterScreen'
              component={MealRegisterScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='LogChart'
              component={LogChart}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='ExersiceRegisterScreen'
              component={Exersice}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='Evolution'
              component={Evolution}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </userEvolutionContext.Provider>
    </userIdContext.Provider>
  );
};

export default App;
