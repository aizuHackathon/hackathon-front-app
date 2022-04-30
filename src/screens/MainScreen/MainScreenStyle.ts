import { StyleSheet } from 'react-native';

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgoroundImageConteiner: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  characterImageContainer: {
    zIndex: 0,
    width: '100%',
    height: '100%',
    top: '25%',
  },
  characterImage: {
    width: '100%',
    height: '75%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  TopLevelContainer: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  HeaderBtnGroup: {
    flexDirection: 'row',
    top: '3%',
    left: '45%',
    width: 'auto',
    height: '30%',
  },
  HeaderBtn: {
    width: '10%',
    height: '20%',
    backgroundColor: 'white',
    alignContent: 'center',
    borderRadius: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingVertical: 10,
    fontSize: 14,
  },
  settingBtn: {
    flex: 1,
    textAlign: 'center',
  },
  settingBtnText: {
    textAlign: 'center',
  },
  BottomBtnGroup: {
    top: '42%',
    right: '-10%',
    width: '100%',
    height: '70%',
  },
  BottomBtn: {
    width: '80%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBtn: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  centerBtn: {
    flex: 1,
    borderColor: 'gray',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: 'white',
  },
  rightBtn: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 16,
    fontSize: 14,
  },
});
