/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeviceList from '../containers/DeviceList';

const text = 'Thiết bị điện thông minh của Lumi được sản xuất theo tiêu chuẩn Châu Âu CE và RoHS, hướng tới sự sang trọng, cao cấp và bền bỉ.';

const DeviceListScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.box}>
        <Text style={styles.title}>{text}</Text>
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
