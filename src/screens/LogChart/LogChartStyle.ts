import { StyleSheet } from 'react-native';

export const LogChartStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E7C0C0',
  },
  LogChartHeaderContainer: {
    flex: 1,
    alignItems: 'center',
  },
  LogChartContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '20%',
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  form: {
    padding: 10,
    width: 232,
    height: 300,
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
});
