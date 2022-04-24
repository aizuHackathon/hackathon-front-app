import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const GenderSelect: React.FC = ({ navigation }) => {
  const [checkedGender, setCheckedGender] = useState('');
  const gender = ['おとこ', 'おんな', 'そのた'];
  return (
    <View style={styles.container}>
      {gender.map((gender, key) => {
        return (
          <View key={gender} style={styles.option}>
            <Pressable
              onPress={() => {
                setCheckedGender(gender);
              }}
            >
              <RadioButton gender={gender} checkedGender={checkedGender} />
            </Pressable>
            <Text style={styles.text}>{gender}</Text>
          </View>
        );
      })}
      <TouchableOpacity activeOpacity={0.7} style={styles.goToNextButton}>
        <Text style={styles.buttonText}>かくてい</Text>
      </TouchableOpacity>
    </View>
  );
};

function RadioButton(props: any) {
  return (
    <View style={styles.radioButton}>
      {props.gender === props.checkedGender && (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#E7C0C0',
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7C0C0',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    marginLeft: 12,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  goToNextButton: {
    position: 'absolute',
    height: 28,
    width: 72,
    backgroundColor: '#FFE5A3',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#FFE5A3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    bottom: 64,
    right: 35,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A0A0A0',
  },
});

export default GenderSelect;
