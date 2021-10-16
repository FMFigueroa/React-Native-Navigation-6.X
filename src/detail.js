import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen</Text>
        <Button 
          title="View Top Tabs" 
          onPress={() => { this.props.navigation.navigate('Top Tabs')}}
        />
        <View style={{marginTop: 20}}>
          <Button 
          title="View Bottom Tabs" 
          onPress={() => { this.props.navigation.navigate('Bottom Tabs')}}
          />
        </View>
      </View>
    );
  }
}

export default Detail;
