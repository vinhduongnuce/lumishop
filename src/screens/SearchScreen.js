/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text} from 'react-native';
import DeviceSearch from '../containers/DeviceSearch';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>Kết quả tìm kiếm: {navigation.getParam('search')}</Text>
      <DeviceSearch navigation={navigation} id={navigation.getParam('search')}/>
    </View>
  );
};

export default SearchScreen;