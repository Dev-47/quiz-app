import React from 'react';
import {View, Button} from 'react-native';
import DevLogo from '../../components/Dev47';
import {styles} from './styles';

function IntroPage({navigation}) {
  return (
    <View style={styles.titleContainer}>
      <DevLogo />
      <Button
        title="Next"
        color={'blue'}
        onPress={() => navigation.navigate('LoginRegister')}
      />
    </View>
  );
}

export default IntroPage;
