import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { WeightRegisterScreenStyles } from './WeightRegisterScreenStyles';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import SelectDropdown from 'react-native-select-dropdown';
import { Navigation } from '../screan';

export const WeightRegisterScreen: React.FC<Navigation> = ({
  navigation,
  route,
}) => {
  const { time } = route.params; //運動時間
  let printTime;
  let second = time / 1000; //秒に変換
  let minutes;
  let hour;
  if (second >= 60 && 3600 > second) {
    minutes = Math.floor(second / 60);
    second = second % 60;
    printTime = minutes + '分' + second + '秒';
  } else if (second >= 3600) {
    hour = Math.floor(second / 3600);
    minutes = Math.floor(second / 60);
    second = second % 60;
    printTime = hour + '時間' + minutes + '分' + second + '秒';
  } else {
    printTime = second + '秒';
  }

  const kindOfExercise = {
    ゆうさんそうんどう: 1,
    むさんそうんどう: 2,
  };
  const [weight, setWeight] = useState<string>('');
  const [selectedExercise, setSelectedExercise] = useState();

  return (
    <View
      style={[
        WeightRegisterScreenStyles.container,
        { flexDirection: 'column', backgroundColor: '#E7C0C0' },
      ]}
    >
      <View style={WeightRegisterScreenStyles.container}>
        <Text>Header</Text>
      </View>

      <View style={[WeightRegisterScreenStyles.container, { flex: 0 }]}>
        <Text style={WeightRegisterScreenStyles.text}>{printTime}</Text>
      </View>

      <View style={[WeightRegisterScreenStyles.container, { flex: 2 }]}>
        <Text style={WeightRegisterScreenStyles.text}>しゅるい</Text>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            borderRadius: 10,
          }}
        >
          <SelectDropdown
            data={Object.keys(kindOfExercise)}
            defaultButtonText={'うんどうのしゅるいをえらぶ'}
            buttonStyle={WeightRegisterScreenStyles.form}
            buttonTextStyle={WeightRegisterScreenStyles.buttonText}
            dropdownIconPosition={'right'}
            onSelect={(selectedItem: keyof typeof kindOfExercise) => {
              setSelectedExercise(kindOfExercise[selectedExercise]);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              return item;
            }}
          />
        </View>
        <View style={WeightRegisterScreenStyles.inputTextForm}>
          <Text style={WeightRegisterScreenStyles.text}>たいじゅう</Text>
          <TextInput
            onChangeText={setWeight}
            value={weight}
            style={WeightRegisterScreenStyles.form}
          />
        </View>
      </View>
      <View style={WeightRegisterScreenStyles.container}>
        <View
          style={{
            position: 'absolute',
            left: '17%',
          }}
        >
          <ProcessButton
            onClick={() => navigation.navigate('MainScreen')}
            content={'つぎへ'}
          />
        </View>
      </View>
    </View>
  );
};
