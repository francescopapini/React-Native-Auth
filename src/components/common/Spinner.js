import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ dimension }) => {
  return (
    <View style={styles.spinnerStyles}>
      <ActivityIndicator size={dimension || 'large'} />
    </View>
  );  
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
