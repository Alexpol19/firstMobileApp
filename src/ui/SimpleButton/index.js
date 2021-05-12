import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
 
const SimpleButton = ({title, onPress, color = "orange", disabled = false}) => {
  return (
    <View style={styles.btnContainer}>
      <Button color={color} title={title} onPress={onPress} disabled={disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 200,
  },
});
 
 
export default SimpleButton;
 