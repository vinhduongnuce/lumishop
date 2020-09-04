/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ItemCart from './ItemCart';
import Footer from './Footer';

const CartList = ({ carts, navigation }) => {
  const textButton = 'THANH TOÁN';
  const textTitle = 'Tổng cộng';
  let total = 0;
  carts.forEach(element => {
    total += element.qty * element.price;
  });
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { id: item.id, name:item.name })} >
        <ItemCart
          item={item}
          navigation={navigation} />
      </TouchableOpacity>

    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={carts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={1}
        style={styles.contentCart}
      />
      <Footer textButton={textButton} textTitle={textTitle} price={total} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentCart: {
    flex: 1
  }
});

export default CartList;