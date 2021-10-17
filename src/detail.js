import React from 'react';
import {View, Text, Button, Platform, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from './styles/styles';

Detail = () => {
  //console.log(this.props);
  console.log(route);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenName}</Text>

      {/* 
          <Button
            title="View Top Tabs"
            onPress={() => {navigation.navigate('Top Tabs', {name: 'param1'});
            }}
          /> 
      */}

      {Platform.select({
        ios: (
          <Button
            title="View Top Tabs"
            onPress={() => navigation.navigate('Top Tabs', {name: 'param 1'})}
          />
        ),
        android: (
          <TouchableOpacity
            style={{marginBottom: 16}}
            onPress={() => navigation.navigate('Top Tabs', {name: 'param 1'})}>
            <Text style={{color: 'blue', fontSize: 20}}>View Top Tabs</Text>
          </TouchableOpacity>
        ),
      })}

      {/* 
          <View style={{marginTop: 20}}>
            <Button
              title="View Bottom Tabs"
              onPress={() => {
                navigation.navigate('Bottom Tabs', {name: 'param2'});
              }}
            />
          </View> 
      */}
      {Platform.select({
        ios: (
          <Button
            title="View Bottom Tabs"
            onPress={() => navigation.navigate('BottomTabs', {name: 'param 2'})}
          />
        ),
        android: (
          <TouchableOpacity
            style={{marginBottom: 16}}
            onPress={() =>
              navigation.navigate('Bottom Tabs', {name: 'param 2'})
            }>
            <Text style={{color: 'blue', fontSize: 20}}>View Bottom Tabs</Text>
          </TouchableOpacity>
        ),
      })}

      {/* 
            <View style={{marginTop: 20}}>
              <Button
                title="Data Post"
                onPress={() => {
                  navigation.navigate('Feed', {data: 'We have new data!'});
                }}
              />
            </View> 
      */}

      {Platform.select({
        ios: (
          <Button
            title="Post Data"
            onPress={() =>
              navigation.navigate('Feed', {data: 'We have new data!'})
            }
          />
        ),
        android: (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Feed', {data: 'We have new data!'})
            }>
            <Text style={styles.androidButtonText}>Post Data</Text>
          </TouchableOpacity>
        ),
      })}
    </View>
  );
};

export default Detail;
