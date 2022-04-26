import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
type Props = { name: string };
const Cat = (props: Props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}
      </Text>

      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'pour me some milk, plese!' : 'Thank you!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name='Taisei'></Cat>
    </>
  );
};

export default Cafe;
