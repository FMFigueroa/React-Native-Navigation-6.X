import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles';

import {useIsFocused} from '@react-navigation/native';

Tab2 = () => {
  const isFocused = useIsFocused();

  console.log(isFocused);

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Tab 2</Text>
    </View>
  );
};

export default Tab2;
