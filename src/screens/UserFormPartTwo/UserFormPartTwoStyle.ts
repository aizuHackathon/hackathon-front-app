import { StyleSheet } from 'react-native';

export const UserFormPartTwoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7C0C0',
    alignItems: 'center',
    justifyContent: 'center',
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
  isCheckedRadioButon: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#E7C0C0',
  },
});
