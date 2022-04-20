import React, { useState } from 'react';
import { Text, View, Button, Image } from 'react-native';

const getHomeScreenText = (
  firstText: string,
  secondText: string,
  thirdText: string,
  fourthText: string,
) => {
  return (
    firstText + ' ' + secondText + ' ' + thirdText + ' ' + fourthText + '!'
  );
};

const HomeScreenText = (props: {
  firstText: string;
  secondText: string;
  thirdText: string;
  fourthText: string;
}) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        {getHomeScreenText(
          props.firstText,
          props.secondText,
          props.thirdText,
          props.fourthText,
        )}
        , and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
        style={{ width: 200, height: 200 }}
      />
      <HomeScreenText
        firstText='This'
        secondText='is'
        thirdText='Home'
        fourthText='Screeeeeeen'
      />
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
