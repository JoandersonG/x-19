import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  
  topbar: {
    width: '110%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topbarText: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  },

  dadosView: {
    backgroundColor: "white",
    width: "90%",
    position: "absolute",
    bottom: 0,
    borderColor: '#800000ff',
    borderWidth: 1
  },

     
  input:{
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: '400',
    borderColor: '#800000ff',
    borderWidth: 1,
    alignSelf: 'center'
  },

  section: {
    fontSize: 14,
    marginTop: 10,
    marginStart: 43,
    fontWeight: '500'
  },

  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  button: {
    marginTop: 10,
    marginBottom: 20,
    marginEnd: 45,
    width: 180,
    height: 42,
    backgroundColor: '#800000ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
 
  },

  buttonText:{
    fontSize: 16,
    fontWeight: '400',
    color: '#fff'
  },
 
});

//make this component available to the app
export default styles;
