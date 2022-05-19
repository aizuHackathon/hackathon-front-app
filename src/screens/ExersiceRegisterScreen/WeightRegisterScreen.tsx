import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { WeightRegisterScreenStyles } from './WeightRegisterScreenStyles';
import { ProcessButton } from '../../components/ProcessButton/ProcessButton';
import { Navigation } from '../screan';
import SelectDropdown from 'react-native-select-dropdown';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type NavigationProp = StackScreenProps<
  RootStackParamList,
  'ExersiceRegisterScreen'
>;

export const WeightRegisterScreen: React.FC<NavigationProp> = ({
  navigation,
  route,
}) => {
  const { time } = route.params; //運動時間
  let printTime;
  let second = time / 1000; //秒に変換
  let minutes;
  let hour;
  let unit: string;
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
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
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
