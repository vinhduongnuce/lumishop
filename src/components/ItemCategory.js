/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image from 'react-native-remote-svg';
import svg from '../utils/svg';

const ItemCategory = ({ item }) => {
  const {name, iconLink} = item;
  let svgRequire = null;
  svg.forEach(element => {
    if (element.name === iconLink) {
      svgRequire = element.require;
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Image
          style={styles.svg}
          source={svgRequire} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );};

const styles = StyleSheet.create({
  container: {
    minWidth: 60,
    maxWidth: 65,
    height: 90,
    marginRight: 20,
    paddingVertical: 0,
    justifyContent: 'space-between'
  },
  iconBox: {
    width: null,
    height: 60,
    borderRadius: 50,
    textAlign: 'center'
  },
  svg: {
    padding: 0,
    height: 40,
    minWidth: 60,
    maxWidth: 65
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '100'
  }
});

export default ItemCategory;