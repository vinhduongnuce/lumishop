/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DeviceHome from '../containers/DeviceHome';
import CategoryList from '../containers/CategoryList';
import Search from '../components/Search';

const HomeScreen = ({navigation}) => {
  
  return (
    <>
      <Search navigation={navigation}/>
      <ScrollView>
        <CategoryList navigation={navigation}/>
        <View style={styles.devices}>
          <View style={styles.deviceTitle}>
            <Text style={styles.textTitle}>Thiết bị</Text>
            <TouchableOpacity
              onPress={()=>navigation.navigate('Device')}
            >
              <Text style={styles.textAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <DeviceHome navigation={navigation}/>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  devices: {
    flex: 1
  },
  deviceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textAll: {
    fontSize: 16,
    fontWeight: '200',
    paddingRight: 10
  }
});



export default HomeScreen;