/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet } from 'react-native'; 
import images from '../utils/image';
import InputSpinner from 'react-native-input-spinner';
import Swipeout from 'react-native-swipeout';
import Image from 'react-native-remote-svg';  

const ItemCart = ({ item, updateCart, deleteCart }) => {
  let imageRequire = null;
  images.forEach(element => {
    if (element.name === item.image) {
      imageRequire = element.require;
    }
  });
  const swipeSettings = {
    autoClose: true,
    right: [
      {
        component: (
          <View style={styles.iconDel}>
            <Image
              style={styles.icon}
              source= {require('../assets/svg/bin.svg')}
            />
          </View>
        ),
        onPress: () => {
          deleteCart(item.id);
        },
        type: 'delete' 
      }
    ]
  };
  return (
    <Swipeout {...swipeSettings}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={imageRequire}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <InputSpinner
            min={0}
            step={1}
            rounded={false}
            style={{width: 95, height: 30}}
            background={'#F0F0F0'}
            buttonStyle={{backgroundColor: '#F0F0F0', width: 30, height: 30}}
            inputStyle={{backgroundColor: '#F0F0F0', bottom: 8, fontSize: 16}}
            buttonTextColor={'#000'}
            value={item.qty}
            onChange={value => updateCart(item.id, value)}
          />
        </View>
      </View>
    </Swipeout>
    
  );};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  image: {
    width: 120,
    height: null
  },
  content: {
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 30,
    paddingRight: 16
  },
  name: {
    fontSize: 16
  },
  price: {
    fontSize: 16,
    color: '#00C569'
  },
  iconDel: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30
  }
});

export default ItemCart;