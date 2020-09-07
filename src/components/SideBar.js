/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../containers/AppText';
import DropDownPicker from 'react-native-dropdown-picker';

const SideBar = ({language, navigation, changeLanguage}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.item}
      onPress={()=>navigation.navigate('Cart')}>
      <AppText style={styles.title} i18nKey={'cart'}></AppText>
    </TouchableOpacity>
    <DropDownPicker
      items={[
        {label: 'English', value: 'en'},
        {label: 'Tiếng việt', value: 'vi'},
      ]}
      defaultValue={language}
      containerStyle={{height: 40}}
      style={{backgroundColor: '#fafafa'}}
      itemStyle={{
        justifyContent: 'flex-start'
      }}
      dropDownStyle={{backgroundColor: '#fafafa'}}
      onChangeItem={item => changeLanguage(item.value)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {

  }
});

export default SideBar;