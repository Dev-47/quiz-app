import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

function RegisterPage({navigation}) {
  const [person, setPerson] = useState(false);

  const handlePress = () => {
    setPerson(!person);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={30}
        color={'#000'}
        style={{marginTop: 20}}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.registerBox}>
        <Text style={styles.title}>Register</Text>

        <View style={styles.btnContainer}>
          {/* Teacher */}
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: person ? null : 'blue'}]}
            onPress={handlePress}>
            <Text style={{color: person ? '#000' : '#fff', fontSize: 16}}>
              Teacher
            </Text>
          </TouchableOpacity>

          {/* Student */}
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: person ? 'blue' : null}]}
            onPress={handlePress}>
            <Text style={{color: person ? '#fff' : '#000', fontSize: 16}}>
              Student
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Fullname" style={styles.textInput} />
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.textInput}
        />

        <TouchableOpacity
          style={[
            styles.textInput,
            styles.btn,
            {backgroundColor: 'blue', alignItems: 'center'},
          ]}>
          <Text style={[styles.text, {color: '#fff'}]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterPage;
