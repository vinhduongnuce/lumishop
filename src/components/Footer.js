/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import AppText from '../containers/AppText';

const Footer = ({price, device, type, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceBox}>
        {type==='add' ? <AppText style={styles.titlePrice} i18nKey={'item-price'}></AppText>: null}
        {type==='cart' ? <AppText style={styles.titlePrice} i18nKey={'total-cart'}></AppText>: null}
        <Text style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity 
        onPress={device ? ()=>navigation.navigate('Cart', {device:device}): null}>
        <View style={styles.buttonBox}>
          {type==='add' ? <AppText style={styles.titleButton} i18nKey={'add-to-cart'}></AppText>: null}
          {type==='cart' ? <AppText style={styles.titleButton} i18nKey={'purchase-cart'}></AppText>: null}
        </View>
      </TouchableOpacity>
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