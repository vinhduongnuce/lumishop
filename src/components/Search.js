/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 
import Image from 'react-native-remote-svg';  
const Search = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.search}>
      <Image 
        style={styles.iconSearch}
        source= {require('../assets/svg/icons8-search.svg')}
      />
      <TextInput style={styles.input}/>
    </View>
    <TouchableOpacity
      style={styles.boxCart}
      onPress={()=>navigation.navigate('Cart')} >
      <Image
        style={styles.iconCart}
        source={require('../assets/svg/shopping-cart.svg')}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10
  },
  input: {
    flex: 1,
    right: 150
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#F7F7F7'
  },
  iconSearch: {
    padding: 8,
    right: 35
  },
  iconCart: {
    width: 40,
    height: 40,
    paddingVertical: 8
  },
  boxCart: {
    backgroundColor: '#00C569',
    height: null,
    borderRadius: 50,
  }
});

export default Search;