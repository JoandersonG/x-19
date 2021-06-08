import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
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

  backButton: {
    position: "absolute", 
    top: 15,
    start: 30,
  },

  backButtonText: {
    fontWeight: '600',
    fontSize: 20,
  },

  tituloGrafico: {
    fontSize: 20,
    marginTop: 15,
  },

  grafico: {
    width: '100%',
    height: '34%',
    marginTop: 20,
  },

  dadosView: {
    backgroundColor: "#800000ff",
    width: "90%",
    position: "absolute",
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
    position: "absolute",
  },
});

//make this component available to the app
export default styles;
