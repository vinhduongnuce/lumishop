/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {Text, StyleSheet, Image, View} from 'react-native'; 
import Footer from './Footer';
import images from '../utils/image';
import ViewPager from '@react-native-community/viewpager';

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
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1" style={{flex: 1}}>
          
          <Image 
            style={styles.image}
            source={imageRequire}
          />
          <Text style={styles.name}>{device.name}</Text>
          <Text style={styles.title}>Thông số kỹ thuật</Text>
          { device.supply ? <Text style={styles.des}>-Nguồn cấp: {device.supply}</Text> : null} 
          { device.temperature ? <Text style={styles.des}>-Nhiệt độ hoạt động: {device.temperature}</Text> : null} 
          { device.shape ? <Text style={styles.des}>-Hình dáng: {device.shape}</Text> : null} 
          { device.voltage ? <Text style={styles.des}>-Điện áp hoạt động: {device.voltage}</Text> : null}
        </View>
        <View key="2" style={{flex: 1}}>
          <Image 
            style={styles.image}
            source={imageRequire}
          />
          <Text style={styles.name}>{device.name}</Text>
          <Text style={styles.des}>{device.description}</Text>
        </View>
      </ViewPager>
      <Footer type={'add'} price={device.price} device={device} navigation={navigation}/>
    </>
  );};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: 250
  },
  footer: {

  },
  viewPager: {
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 10
  },
  des: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  }
});

export default DeviceDetail;