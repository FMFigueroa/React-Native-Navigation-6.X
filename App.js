import React, {Component} from 'react';
import Feed from './src/feed';
import Detail from './src/detail';

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

import Icon1 from './src/screens/tabsBottom/Icon1';
import Icon2 from './src/screens/tabsBottom/Icon2';
import Icon3 from './src/screens/tabsBottom/Icon3';


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const screenOptions = {headerShown: false};

App = () => {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} options={{title: 'Home'}} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Top Tabs" children={createTopTabs} />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
    </Stack.Navigator>
  );

  createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen name="Tab1" component={Tab1} />
        <MaterialTopTabs.Screen name="Tab2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };

  createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Icon1" component={Icon1} />
        <MaterialBottomTabs.Screen name="Icon2" component={Icon2} />
        <MaterialBottomTabs.Screen name="Icon3" component={Icon3} />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={screenOptions}>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Screen1} />
        <Drawer.Screen name="Favorites" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
