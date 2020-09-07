/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DeviceList from '../containers/DeviceList';
import AppText from '../containers/AppText';

const DeviceListScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.box}>
        <AppText style={styles.title} i18nKey={'info-device-lumi'}></AppText>
      </View>
      <DeviceList navigation={navigation}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 28,
    marginVertical: 15
  },
  title: {
    fontSize: 12,
    fontWeight: '100'
  }
});


export default DeviceListScreen;
