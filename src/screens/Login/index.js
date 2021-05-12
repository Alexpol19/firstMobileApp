import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SimpleButton from '../../ui/SimpleButton/index.js';
import Input from '../../ui/Input/index.js';

const Login = ({navigation}) => {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const validateFields = (text, type) => {
    setError(false);
    if(type === "login"){
      onChangeLogin(text);
      if((text.length > 0) && (password.length > 0)){
        setDisabled(false);
      }
      else {
        setDisabled(true);
      }
    } else if(type === "password"){
      onChangePassword(text);
      if((login.length > 0) && (text.length > 0)){
        setDisabled(false);
      }
      else {
        setDisabled(true);
      }
    }
  }

  const onSubmit = () => {
    if(login === 'admin' && password === '12345678'){
      navigation.navigate('Home', {page: "Home"})
    } else {
      setError(true);
    }
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      <View
        style={styles.container}>
        <View style={{width: "70%"}}>
          <Text style={styles.text}>Login!</Text>
          <View style={styles.separateLine} />
          <Input
            onChange={(text) => {validateFields(text, 'login');}}
            placeholder="Login"
            value={login}
            error={error}
          />
          <View style={{marginTop: 15}} />
          <Input
            onChange={(text) => {validateFields(text, 'password');}}
            placeholder="Password"
            value={password}
            secure
            error={error}
          />
          <View style={{marginTop: 20}} />
          <View style={{display: "flex", alignItems: "center"}}><SimpleButton title="Sign In" onPress={onSubmit} color="green" disabled={disabled} /></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f8f8f8",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  separateLine: {
    backgroundColor: '#f8f8f8',
    height: 0.5,
    width: "30%",
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    width: "100%"
  },
});


export default Login;
