import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input:{
    marginBottom: 26,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: '400',
    borderColor: '#800000ff',
    borderWidth: 1,
  },

  button: {
    marginBottom: 30,
    width: 300,
    height: 42,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
 
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff'
  },

  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute' //not push other components underneath it
  },

  registerFieldsContainer: {
    backgroundColor: 'rgba(200, 200, 200, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,

  }
});

//make this component available to the app
export default styles;