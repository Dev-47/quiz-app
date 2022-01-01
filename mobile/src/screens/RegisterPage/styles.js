import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  registerBox: {
    marginVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  btnContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  btn: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    paddingHorizontal: 38,
    paddingVertical: 12,
  },

  inputContainer: {
    height: '65%',
    justifyContent: 'space-evenly',
  },

  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    // marginVertical: 10,
    paddingHorizontal: 20,
  },
});
