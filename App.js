//import liraries
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/components/HomeScreen";
import MapaAglomeracao from "./src/components/MapaAglomeracaoScreen";
import Login from "./src/components/LoginScreen";
import Register from "./src/components/RegisterScreen";
import Estatisticas from "./src/components/EstatisticasScreen"

const MainDrawer = createDrawerNavigator(
  {
    'Estatísticas': {
      screen: Estatisticas,
      options: { title: "Not Home" }
    },
    'Mapa de Aglomeração': MapaAglomeracao,
    'Denunciar Aglomeração': Home,
  },
  {
    //Prop
    contentOptions: {
      //Sempre que a aba estiver ativa, manter essa cor
      activeTintColor: `#80ccc0`,
      //Prop
      //Permite aumentar a fonte
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const AppNavigator = createStackNavigator({
  Drawer: {
    screen: MainDrawer,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
  },

});

//make this component available to the app
//export the component of our drawer
export default createAppContainer(AppNavigator);
