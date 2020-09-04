/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'; 
import ItemDevice from './ItemDevice';

const DeviceList = ({devices, navigation, fetchDevices, id}) => {
  useEffect(()=>{
    id ? fetchDevices(id) : fetchDevices();
  },[]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={()=>navigation.navigate('Detail', {id: item.id, name:item.name})} >
        <ItemDevice
          item={item}
          navigation={navigation}/>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={devices}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  }
});

export default DeviceList;