import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

//style
import colors from '../../style/colors';

const BackButton = () => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => Actions.pop()}>
      <Ionicon name='chevron-back' size={24} color='#0B0C0E' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.NEUTRAL,
    height: 24,
    width: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BackButton;
