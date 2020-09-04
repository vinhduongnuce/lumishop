/* eslint-disable react/display-name */
import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import DeviceListScreen from './screens/DeviceListScreen';
import CategoryDetailScreen from './screens/CategoryDetailScreen';

import configureStore from './redux/config';
const store = configureStore();
const navigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'LUMISHOP'
    })
  },
  Device:{
    screen: DeviceListScreen,
    navigationOptions: () => ({
      title: 'Thiết bị điện Lumi'
    })    
  },
  Detail:{
    screen: DetailScreen,      
  },
  Cart:{
    screen: CartScreen,   
    navigationOptions: () => ({
      title: 'Giỏ hàng'
    }) 
  },
  Search:{
    screen: SearchScreen,      
  },
  CategoryDetail:{
    screen: CategoryDetailScreen,   
  }
});

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      drawerLabel:'Trang chủ'
    }
  },
  Cart:{
    screen: CartScreen,
    navigationOptions:{
      drawerLabel:'Giỏ hàng'
    }
  },
  ChangeLanguage:{
    screen: navigator,
    navigationOptions: () => ({
      drawerLabel:'Thay đổi ngôn ngữ'
    }), 
  },
},
{
  initialRouteName:'Home',  
  contentComponent: (props) => {
    return(
      <ScrollView>
        <DrawerNavigatorItems {...props}></DrawerNavigatorItems>
      </ScrollView>
    );} ,
}
);

const App = createAppContainer(AppDrawer);


export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};