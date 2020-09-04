/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions } from 'react-native';
import images from '../utils/image';

const ItemDevice = ({ item, navigation }) => {
  const {id, image, name, supply, temperature,shape, voltage, price} = item;
  let imageRequire = null;
  images.forEach(element => {
    if (element.name === image) {
      imageRequire = element.require;
    }
  });
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={imageRequire}
      />
      <Text style={styles.name}>{name}</Text>
      { supply ? <Text style={styles.text}>Nguồn cấp: {supply}</Text> : null} 
      { temperature ? <Text style={styles.text}>Nhiệt độ hoạt động: {temperature}</Text> : null} 
      { shape ? <Text style={styles.text}>Hình dáng: {shape}</Text> : null} 
      { voltage ? <Text style={styles.text}>Điện áp hoạt động: {voltage}</Text> : null} 

      <View style={styles.info}>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Detail', {id, name})}
        >
          <Text style={styles.more}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );};
const width = Math.round(Dimensions.get('window').width / 2-16);
const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    width: width
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: width
  },
  name: {
    marginVertical: 13,
    fontSize: 16
  },
  text: {
    fontSize: 14,
    color: '#929292'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  price: {
    color: '#00C569',
    fontSize: 16
  },
  more: {
    fontSize: 13,
    color: '#0026C5'
  }
});

export default ItemDevice;