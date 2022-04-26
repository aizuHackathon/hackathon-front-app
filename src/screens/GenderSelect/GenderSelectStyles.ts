import { StyleSheet } from 'react-native';

export const genderStyles = StyleSheet.create({
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
  isCheckedRadioButon: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#E7C0C0',
  },
  goToBackButton: {
    position: 'absolute',
    height: '7%',
    width: '20%',
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
    bottom: '10%',
    left: '10%',
  },
  goToNextButton: {
    position: 'absolute',
    height: '7%',
    width: '20%',
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
    bottom: '10%',
    right: '10%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A0A0A0',
  },
});
