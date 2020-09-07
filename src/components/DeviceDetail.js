/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {Text, StyleSheet, Image, ScrollView} from 'react-native'; 
import Footer from './Footer';
import images from '../utils/image';

const DeviceDetail = ({device, navigation, id, fetchDetailDevices}) => {
  useEffect(()=> {
    fetchDetailDevices(id);
  });

  if (!device) return null;
  let imageRequire = null;
  images.forEach(element => {
    if (element.name === device.image) {
      imageRequire = element.require;
    }
  });
  return (
    <>
      <ScrollView style={styles.container}>
        <Image 
          style={styles.image}
          source={imageRequire}
        />
        <Text>{device.name}</Text>
      </ScrollView>
      <Footer type={'add'} price={device.price} device={device} navigation={navigation}/>
    </>
  );};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: 250
  },
  footer: {

  }
});

export default DeviceDetail;