import { StyleSheet } from 'react-native';

export const EvolutionStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7C0C0',
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
    top: 0,
  },
  rectangle: {
    width: '80%',
    height: 100,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'gray',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hukidashi: {
    top: '10%',
    left: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  hukidashiInnerText: {
    fontSize: 20,
    color: 'white',
  },
  BottomBtnGroup: {
    top: '70%',
    height: '10%',
    width: '100%',
  },
  BottomBtn: {
    marginRight: '15%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
