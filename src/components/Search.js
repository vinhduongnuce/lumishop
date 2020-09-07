/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 
import Image from 'react-native-remote-svg';  
const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  return(
    <View style={styles.container}>
      <View style={styles.search}>
        <TouchableOpacity
          style={styles.iconSearch}
          onPress={()=>navigation.navigate('Search', {search: search})}>
          <Image
            source= {require('../assets/svg/icons8-search.svg')}
          />
        </TouchableOpacity>
        <TextInput 
          style={styles.input}
          onChangeText={text => setSearch(text)}/>
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
  );};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10
  },
  input: {
    flex: 1,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#F7F7F7',
    marginRight: 15
  },
  iconSearch: {
    paddingVertical: 8,
    paddingHorizontal: 16
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