import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//style
import colors from '../../style/colors';

const Menu = ({ title, icon: Icon, style, iconContainerStyle }) => {

  return (
    <View style={styles.menuCon}>
      <View style={{...styles.menuCard, ...iconContainerStyle}}>
        <Icon />
      </View>
      <Text style={styles.menuTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: colors.PRIMARY
  },
  menuCon: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5
  },
  menuTitle: {
    fontSize: 10,
    fontWeight: '400',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginTop: 4
  }
});

export default Menu;
