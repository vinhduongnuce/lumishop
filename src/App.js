/* eslint-disable react/display-name */
import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import DeviceListScreen from './screens/DeviceListScreen';
import CategoryDetailScreen from './screens/CategoryDetailScreen';
import SideBar from './containers/SideBar';

import configureStore from './redux/config';
const store = configureStore();
const navigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTitleStyle: { alignSelf: 'center' },
      title: 'LUMISHOP'
    })
  },
  Device:{
    screen: DeviceListScreen,
    navigationOptions: () => ({
      headerTitleStyle: { alignSelf: 'center' },
      title: 'Thiết bị điện Lumi'
    })    
  },
  Detail:{
    screen: DetailScreen,      
  },
  Cart:{
    screen: CartScreen,   
    navigationOptions: () => ({
      headerTitleStyle: { alignSelf: 'center' },
      title: 'Giỏ hàng'
    }) 
  },
  Search:{
    screen: SearchScreen,
    navigationOptions: () => ({
      headerTitleStyle: { alignSelf: 'center' },
    })   
  },
  CategoryDetail:{
    screen: CategoryDetailScreen,
    navigationOptions: () => ({
      headerTitleStyle: { alignSelf: 'center' },
    }) 
  }
});

const AppDrawer = createDrawerNavigator({
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
  initialRouteName:'ChangeLanguage',
  contentComponent: props=> <SideBar {...props}/>
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