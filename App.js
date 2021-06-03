//import liraries
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./src/components/HomeScreen";
import Profile from "./src/components/ProfileScreen";
import Login from "./src/components/LoginScreen";
import Register from "./src/components/RegisterScreen";

const MainDrawer = createDrawerNavigator(
  {
    Home: Home,
    Profile: Profile,
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
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
  },
  Drawer: {
    screen: MainDrawer,
    navigationOptions: {
      headerShown: false,
    },
  },
});

//make this component available to the app
//export the component of our drawer
export default createAppContainer(AppNavigator);
