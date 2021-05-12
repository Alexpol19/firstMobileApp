import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Home = ({route}) => {
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
        <Text style={{fontSize: 24, fontWeight: "600"}}>Congratulations!!!</Text>
        <Text style={{fontSize: 20, marginBottom: 20, marginTop: 20}}>You are loggined in My first app!</Text>
        <Text style={{fontSize: 20}}>Now you on {route.params.page} page!</Text>
      </View>
    </SafeAreaView>
  );
};


export default Home;
