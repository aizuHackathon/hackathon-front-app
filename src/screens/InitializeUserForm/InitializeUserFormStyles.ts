import { StyleSheet } from 'react-native';

export const initializeUserFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7C0C0',
    flexDirection: 'column',
    paddingHorizontal: 87,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  },
  inputTextForm: {
    marginVertical: 10,
  },
});
