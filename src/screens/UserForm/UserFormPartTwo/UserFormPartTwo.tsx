import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import { UserFormPartTwoStyles } from './UserFormPartTwoStyle';
import { ProcessButton } from '../../../components/ProcessButton/ProcessButton';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { FormProps, userRegisterForm } from '../UserForm';
import { ErrorMessage } from '@hookform/error-message';
import { BACKEND_API_URI } from '@env';
import { userIdContext } from '../../../components/context';

type RadioButtonProps = {
  gender: Gender;
  checkedGender: Gender;
  onSelect: (gender: Gender) => void;
  setValue: UseFormSetValue<{
    userId: string;
    password: string;
    height: string;
    weight: string;
    age: string;
    sex: string;
  }>;
  watch: UseFormWatch<{
    name: string;
    pass: string;
    height: string;
    weight: string;
    old: string;
    sex: string;
  }>;
};

enum Gender {
  Male = 'おとこ',
  Female = 'おんな',
  Other = 'そのた',
}

const genders: Array<Gender> = [Gender.Male, Gender.Female, Gender.Other];

export const UserFormPartTwo: React.FC<FormProps> = ({
  navigation,
  handleSubmit,
  errors,
  setValue,
  watch,
}) => {
  const { setUserId } = useContext(userIdContext);
  const postUserInfo = async (data: userRegisterForm) => {
    const url = `${BACKEND_API_URI}/users`;

    const form_data = new FormData();

    Object.keys(data).forEach((key: string) => {
      form_data.append(key, data[key]);
    });

    const requestOptions = {
      method: 'POST',
      body: form_data,
      redirect: 'follow',
    };

    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserId(result.id);
      })
      .catch((error) => console.log('error', error));
  };
  const onSubmit = (data: userRegisterForm) => {
    postUserInfo(data);
    navigation.navigate('MainScreen');
  };
  return (
    <View
      style={[UserFormPartTwoStyles.container, { flexDirection: 'column' }]}
    >
      <View style={[UserFormPartTwoStyles.container, { flex: 1 }]}>
        <Text>ここにHeader</Text>
      </View>
      <View style={[UserFormPartTwoStyles.container, { flex: 2 }]}>
        {genders.map((gender) => {
          return (
            <RadioButton
              gender={gender}
              key={gender}
              setValue={setValue}
              watch={watch}
            />
          );
        })}
        <ErrorMessage
          errors={errors}
          name='age'
          render={({ message }) => (
            <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 5 }}>
              {message}
            </Text>
          )}
        />
      </View>
      <View
        style={[
          UserFormPartTwoStyles.container,
          { flex: 1, flexDirection: 'row' },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <ProcessButton
            onClick={() => navigation.goBack()}
            content={'もどる'}
          />
          <ProcessButton
            onClick={handleSubmit(onSubmit)}
            content={'かくてい'}
          />
        </View>
      </View>
    </View>
  );
};

const RadioButton: React.FC<RadioButtonProps> = ({
  gender,
  setValue,
  watch,
}) => {
  const checkSelectedValue = (gen: Gender): boolean => {
    const watcher = watch('sex');
    return gen === genders[Number(watcher) - 1];
  };
  return (
    <Pressable
      onPress={() => {
        const index: string = (
          Object.values(Gender).indexOf(gender) + 1
        ).toString();
        setValue('sex', index, { shouldValidate: true });
      }}
      style={UserFormPartTwoStyles.option}
    >
      <View style={UserFormPartTwoStyles.radioButton}>
        {checkSelectedValue(gender) && (
          <View style={UserFormPartTwoStyles.isCheckedRadioButon} />
        )}
      </View>
      <Text style={UserFormPartTwoStyles.text}>{gender}</Text>
    </Pressable>
  );
};
