/* eslint-disable react/prop-types */
import React from 'react';
import DeviceDetail from '../containers/DeviceDetail';


const DetailScreen = ({navigation}) => {
  DetailScreen.navigationOptions = {
    title: navigation.getParam('name')
  };

  return (
    <DeviceDetail navigation={navigation} id={navigation.getParam('id')}/>
  );
};


export default DetailScreen;