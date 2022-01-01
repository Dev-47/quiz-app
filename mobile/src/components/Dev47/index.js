import React from 'react';
import {styles} from './styles';
import {View, Text} from 'react-native';

function DevLogo() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        <Text style={styles.dev}>DEV</Text> 47
      </Text>
    </View>
  );
}

export default DevLogo;
