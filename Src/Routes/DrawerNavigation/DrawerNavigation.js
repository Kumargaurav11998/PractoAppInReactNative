import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../../Screens/Home/HomeScreen';
import {Color} from '../../Utils/Color';
//import {Color} from '../../Utils/color';

const Drawer = createDrawerNavigator();
const DrawerNavigation = props => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          statusBarStyle: 'dark',
          statusBarColor: Color.white,
          drawerContentStyle: {width: 100},
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
