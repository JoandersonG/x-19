import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  dadosView: {
    backgroundColor: "#800000ff",
    width: "90%",
    position: "absolute", //Here is the trick
    bottom: 20,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  exclamation: {
    fontWeight: '500',
    fontSize: 70,
    color: 'white',
  },

  text: {
    color: 'white',
    marginStart: 15,
    fontSize: 22,
  },

  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute", //not push other components underneath it
  },
});

//make this component available to the app
export default styles;
