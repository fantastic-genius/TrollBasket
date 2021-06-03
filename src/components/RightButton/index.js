import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';

//svg
import Cart from '../../assets/svg/Cart.svg';

//style
import colors from '../../style/colors';


const RightButton = () => {
  const cartProducts = useSelector(s => s.cart.data); 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconCircle}>
        <Feather name="search" size={24} style={styles.icon} color='#2E4457' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconCircle} onPress={() => Actions.carts()}>
        <View style={styles.cartNumberCon}>
          <Text style={styles.cartNumber}>{cartProducts.length}</Text>
        </View>
        <Cart />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconCircle: {
    backgroundColor: colors.NEUTRAL,
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  cartNumberCon:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ORANGE,
    height: 16,
    width: 16,
    borderRadius: 8,
    position: 'absolute',
    top: -4,
    right: -4
  },
  cartNumber: {
    color: colors.WHITE,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16
  }
})

export default RightButton;
