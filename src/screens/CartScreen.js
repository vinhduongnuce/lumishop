/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'react-native';
import CartList from '../containers/CartList';

const CartScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <CartList navigation={navigation} device={navigation.getParam('device')}/>
    </View>
  );
};


export default CartScreen;