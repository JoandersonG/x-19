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
    'Denunciar Aglomeração': Home,
    'Mapa de Aglomeração': MapaAglomeracao,
    'Estatísticas': {
      screen: Estatisticas,
    },
  },
  {
    contentOptions: {
      activeTintColor: `#800000ff`,
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
