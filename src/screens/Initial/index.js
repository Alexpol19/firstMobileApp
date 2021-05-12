import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SimpleButton from '../../ui/SimpleButton/index.js';

const Initial = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('Login')
  }
  return (
    <SafeAreaView style={{backgroundColor: Colors.lighter}}>
      <StatusBar barStyle='light-content' />
      <View
        style={{
          display: "flex",
          backgroundColor: Colors.white,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <SimpleButton title="Login" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};


export default Initial;
