import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserFormPartOne } from './UserFormPartOne/UserFormPartOne';
import { UserFormPartTwo } from './UserFormPartTwo/UserFormPartTwo';
import {
  Control,
  FieldError,
  useForm,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { Navigation } from '../screan';

type RootStackParamList = {
  Home: undefined;
  InitializeUserForm: undefined;
};
export type FormProps = {
  control: Control<{
    name: string;
    pass: string;
    height: string;
    weight: string;
    old: string;
    sex: string;
  }>;
  handleSubmit: React.VFC;
  errors: {
    name?: FieldError | undefined;
    pass?: FieldError | undefined;
    height?: FieldError | undefined;
    weight?: FieldError | undefined;
    old?: FieldError | undefined;
    sex?: FieldError | undefined;
  };
  setValue: UseFormSetValue<{
    name: string;
    pass: string;
    height: string;
    weight: string;
    old: string;
    sex: string;
  }>;
  getValues: UseFormGetValues<{
    name: string;
    pass: string;
    height: string;
    weight: string;
    old: string;
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
} & Navigation;

export type userRegisterForm = {
  name: string;
  pass: string;
  height: string;
  weight: string;
  old: string;
  sex: string;
};

// TODO: Stackがコンポーネントとして使えないとerrorが出るので、anyを使わずにできるようにする。
const Form = createNativeStackNavigator<RootStackParamList>() as any;

export const RegisterForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      pass: '',
      height: '',
      weight: '',
      old: '',
      sex: '1',
    },
  });
  return (
    <Form.Navigator initialRouteName='UserFormPartOne'>
      <Form.Screen name='UserFormPartOne' options={{ headerShown: false }}>
        {(props) => (
          <UserFormPartOne
            {...props}
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        )}
      </Form.Screen>
      <Form.Screen name='UserFormPartTwo' options={{ headerShown: false }}>
        {(props) => (
          <UserFormPartTwo
            {...props}
            control={control}
            handleSubmit={handleSubmit}
            errors={errors}
            setValue={setValue}
            watch={watch}
          />
        )}
      </Form.Screen>
    </Form.Navigator>
  );
};
