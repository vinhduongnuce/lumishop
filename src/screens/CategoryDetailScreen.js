/* eslint-disable react/prop-types */
import React from 'react';
import {View} from 'react-native';
import CategoryDetail from '../containers/CategoryDetail';

const CategoryDetailScreen = ({navigation}) => {
  CategoryDetailScreen.navigationOptions =  {
    title: navigation.getParam('name')
  };
  
  return (
    <View>
      <CategoryDetail navigation={navigation} id={navigation.getParam('id')}/>
    </View>
  );
};



export default CategoryDetailScreen;