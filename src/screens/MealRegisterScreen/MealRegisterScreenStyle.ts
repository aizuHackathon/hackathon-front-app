import { StyleSheet } from 'react-native';

export const MealRegisterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MealRegisterHeaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MealRegisterFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  form: {
    padding: 10,
    width: 232,
    height: 35,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    marginVertical: 30,
  },
  inputTextForm: {
    marginVertical: 10,
  },
});
