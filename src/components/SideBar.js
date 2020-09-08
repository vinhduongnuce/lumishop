/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../containers/AppText';
import DropDownPicker from 'react-native-dropdown-picker';
import Image from 'react-native-remote-svg';  

const SideBar = ({language, navigation, changeLanguage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={()=>navigation.navigate('Cart')}>
        <View style={styles.boxIcon}>
          <Image
            style={styles.icon}
            source= {require('../assets/svg/supermarket.svg')}
          />
        </View>
        <AppText style={styles.title} i18nKey={'cart'}></AppText>
      </TouchableOpacity>

      <DropDownPicker
        items={[
          {label: 'English', value: 'en'},
          {label: 'Tiếng việt', value: 'vi'},
        ]}
        defaultValue={language}
        containerStyle={{height: 40}}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        onChangeItem={item => changeLanguage(item.value)}
      />
    </View>
  );};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 15
  },
  icon: {
    width: 25,
    height: 25,
  },
  boxIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  }
});

export default SideBar;