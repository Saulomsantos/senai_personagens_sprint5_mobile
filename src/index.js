import { createMaterialTopTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Personagens from "./pages/personagens";
import Profile from "./pages/profile";

const PersonagensNavigator = createMaterialTopTabNavigator(
  {
    Personagens,
    Profile
  },
  {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        pressColor: '#f5898d',
        indicatorStyle: {backgroundColor: '#f5898d', height: 3, alignContent: 'center'},
        style: {
            backgroundColor: '#a50d12',
            height: 55
        }
    }
  }
);

// https://www.schemecolor.com/marvel-comics-logo-red-color.php

export default createAppContainer(PersonagensNavigator);