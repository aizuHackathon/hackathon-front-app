import { StyleSheet } from 'react-native';

export const initializeUserFormStyles = StyleSheet.create({
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
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    // position: 'absoslute',
    // width: 232,
    // height: 35,
    // left: 45,
    // top: 120,
    backgroundColor: '#FFFFFF',
    // boxShadow: 0 4 4 rgba(0, 0, 0, 0.25),
    borderRadius: 10,
  },
});
