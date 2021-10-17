import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

class Feed extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation 6</Text>
        <Text style={styles.subTitle}>Drawer , Tabs & Props Route Params</Text>
        <Button
          title="Go to Detail Item"
          onPress={() => {
            this.props.navigation.navigate('Detail', {
              screenName: 'props.route.params',
            });
          }}
        />
      </View>
    );
  }
}

export default Feed;
