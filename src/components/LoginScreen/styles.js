import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },

    logo: {
      width: 220,
      height: 97,
      marginTop: 25,
      marginEnd: 50,
      marginBottom: 5,
      alignSelf: 'flex-end'
    },

    subtitle: {
      fontSize: 16,
      alignSelf: 'flex-end',
      fontWeight: '600',
      marginEnd: 50,
    },

    loginFieldsContainer: {
      width: '80%',
      backgroundColor: 'rgba(200, 200, 200, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      flexWrap:'wrap',
      alignSelf: 'center',
      marginTop: 60,
    },
      
    input:{
      marginBottom: 40,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: '400',
      borderColor: '#800000ff',
      borderWidth: 1,
    },

    button: {
      marginBottom: 40,
      width: 300,
      height: 42,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
   
    },

    buttonText:{
      fontSize: 16,
      fontWeight: '400',
      color: '#fff'
    },
   
  });

  //make this component available to the app
  export default styles ;