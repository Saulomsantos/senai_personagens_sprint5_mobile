import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Personagens from "./pages/personagens";
import Profile from "./pages/profile";

const PersonagensNavigator = createBottomTabNavigator(
  {
    Personagens,
    Profile
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#dd99ff",
      activeBackgroundColor: "#B727FF",
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#FFFFFF",
      style: {
        height: 50
      }
    }
  }
);

// https://www.schemecolor.com/marvel-comics-logo-red-color.php

export default createAppContainer(PersonagensNavigator);