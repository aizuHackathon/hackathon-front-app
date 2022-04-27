import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  processButton: {
    height: 40,
    width: 60,
    backgroundColor: '#FFE5A3',
    borderRadius: 9,
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
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A0A0A0',
  },
});
