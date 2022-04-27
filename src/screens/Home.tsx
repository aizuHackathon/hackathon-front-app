import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to InitializeUserForm'
        onPress={() => navigation.navigate('InitializeUserForm')}
      />
    </View>
  );
};

export default HomeScreen;
