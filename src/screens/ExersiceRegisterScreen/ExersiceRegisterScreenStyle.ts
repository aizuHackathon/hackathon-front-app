import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
export const ExersiceRegisterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ExersiceRegisterHeaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ExersiceRegisterFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '700',
  },
  timer: {
    marginVertical: 10,
  },
  timerText: {
    fontSize: 60,
  },
  timerContainer: {
    width: WIDTH * 0.7,
    height: WIDTH * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: (WIDTH * 0.7) / 2,
    padding: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 100,
  },
});
