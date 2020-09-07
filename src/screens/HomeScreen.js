/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DeviceHome from '../containers/DeviceHome';
import CategoryList from '../containers/CategoryList';
import Search from '../components/Search';
import AppText from '../containers/AppText';

const HomeScreen = ({navigation}) => {
  
  return (
    <>
      <Search navigation={navigation}/>
      <ScrollView>
        <CategoryList navigation={navigation}/>
        <View style={styles.devices}>
          <View style={styles.deviceTitle}>
            <AppText style={styles.textTitle} i18nKey={'title-device'}></AppText>
            <TouchableOpacity
              onPress={()=>navigation.navigate('Device')}
            >
              <AppText style={styles.textAll} i18nKey={'see-all-devices'}></AppText>
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
    paddingLeft: 13
  },
  textAll: {
    fontSize: 16,
    fontWeight: '200',
    paddingRight: 10
  }
});



export default HomeScreen;