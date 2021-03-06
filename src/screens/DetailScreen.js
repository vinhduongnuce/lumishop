/* eslint-disable no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'react-native-remote-svg'; 
import DeviceDetail from '../containers/DeviceDetail';
import { TouchableOpacity, StyleSheet } from 'react-native';

const DetailScreen = ({navigation}) => {
  DetailScreen.navigationOptions = {
    title: navigation.getParam('name'),
    headerRight: () => (
      <TouchableOpacity
        style={styles.box}
        onPress={()=>navigation.navigate('Home')} >
        <Image
          style={styles.icon}
          source={require('../assets/svg/icons8-search-white.svg')}
        />
      </TouchableOpacity>
    ),
  };

  return (
    <DeviceDetail navigation={navigation} id={navigation.getParam('id')}/>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    paddingVertical: 8
  },
  box: {
    backgroundColor: '#00C569',
    height: null,
    borderRadius: 50,
    marginRight: 16
  }
});


export default DetailScreen;