/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ItemCategory from './ItemCategory';

const CategoryList = ({categories, navigation, fetchCategories}) => {
  useEffect(()=>{
    fetchCategories();
  },[]);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={()=>navigation.navigate('CategoryDetail', {name: item.name, id:item.id})}
    >
      <ItemCategory item={item}/>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
        keyExtractor={category => category.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 13,
    marginVertical: 50
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default CategoryList;