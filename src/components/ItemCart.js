/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
import images from '../utils/image';

const ItemCart = ({ item }) => {
  let imageRequire = null;
  images.forEach(element => {
    if (element.name === item.image) {
      imageRequire = element.require;
    }
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imageRequire}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}>
        <Text>Del</Text>
      </TouchableOpacity>
    </View>
  );};

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: null
  },
  content: {
    flex: 1
  },
  deleteButton: {
    right: -85
  }
});

export default ItemCart;