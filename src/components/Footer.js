/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 

const Footer = ({price, device, textButton, textTitle, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceBox}>
        <Text style={styles.titlePrice}>{textTitle}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      { device ? <TouchableOpacity onPress={()=>navigation.navigate('Cart', {device:device, type: 'add'})}><View style={styles.buttonBox}><Text style={styles.titleButton}>{textButton}</Text></View></TouchableOpacity> : <View style={styles.buttonBox}><Text style={styles.titleButton}>{textButton}</Text></View>}
    </View>
  );};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 17
  },
  buttonBox: {
    backgroundColor: '#00C569',
    borderRadius: 5,
    width: 146,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleButton: {
    color: 'white'
  },
  titlePrice: {
    fontSize: 12,
    fontWeight: '100'
  },
  price: {
    fontSize: 18,
    color: '#00C569',
    fontWeight: 'bold'
  },
  priceBox: {
    justifyContent: 'center'
  }
});

export default Footer;