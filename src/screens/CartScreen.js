/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {View} from 'react-native';
import CartList from '../containers/CartList';
import { connect } from 'react-redux';
import { addCart } from '../redux/actions';

const CartScreen = ({navigation, addCart}) => {
  useEffect(()=> {
    const type = navigation.getParam('type');
    if (type === 'add') {
      const device = navigation.getParam('device');
      addCart(device.id, device.name, 1, device.price, device.image);
    }
  }, []);

  return (
    <View style={{flex:1}}>
      <CartList navigation={navigation}/>
    </View>
  );
};

const mapStateToProps = state => ({
  carts: state.carts
});

const mapDispatchToProps = {
  addCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);