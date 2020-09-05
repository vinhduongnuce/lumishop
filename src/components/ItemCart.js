/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native'; 
import images from '../utils/image';
import InputSpinner from 'react-native-input-spinner';
import Swipeout from 'react-native-swipeout';

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
        onPress: () => {
          deleteCart(item.id);
        },
        text: 'Delelte', type: 'delete' 
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
    flexDirection: 'row'
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
  }
});

export default ItemCart;