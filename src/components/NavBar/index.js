import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//component
import BackButton from '../BackButton';
import RightButton from '../RightButton';

//style
import colors from '../../style/colors';

const NavBar = ({ title, hideRightButton }) => {

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>{title}</Text>
      {hideRightButton ? null  : <RightButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: colors.SEMIDARKGRAY,
    fontWeight: '400'
  }
});

export default NavBar;
