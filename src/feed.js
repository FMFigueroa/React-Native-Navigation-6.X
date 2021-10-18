import React from 'react';
import {View, Text, Button, Platform, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute, useNavigationState,  } from '@react-navigation/native';

import {styles} from './styles/styles';

Feed = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const index = useNavigationState(state => state.index);
  console.log(`Screen index: ${index}`);

    let detailResult = route.params;
    //console.log(this.props);
    //console.log(route)

    return (
      <View style={styles.center}>
        <Text style={styles.title}>
          {detailResult ? 'Navigation 6'+' '+ detailResult.data : 'Navigation 6'}
        </Text>
        <Text style={styles.subTitle}>Drawer , Tabs & Props Route Params</Text>
        {
        Platform.select({
          ios:
            <Button
              title='Go to Feed Item'
              onPress={() => navigation.navigate('Detail', { screenName: "Detail Screen by Navigation Route" })}
            />,
          android:
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { screenName: "Detail Screen by Navigation Route" })}>
              <Text style={styles.androidButtonText}>Go to Detail Screen</Text>
            </TouchableOpacity>
        })
      }
    </View>
  );
}

export default Feed;
