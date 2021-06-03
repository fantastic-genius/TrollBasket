import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

//style
import colors from '../../style/colors';

const Product = ({ title, quantity, minPrice, maxPrice, image, id }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => Actions.productDetails({ id })}>
      <View>
      <Image style={styles.productImg} source={{uri: image}} />
      <View>
        <Text style={styles.procuctTitle}>{title}</Text>
        <Text style={styles.procuctPrice}>{`₦${minPrice} - ₦${maxPrice}`}</Text>
        <Text style={styles.procuctPieces}>{`MOQ ${quantity} (pieces)`}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 10
  },
  productImg: {
    height: 98,
    width: '100%',
    borderRadius: 4,
    marginBottom: 4
  },
  procuctTitle: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '400',
    color: colors.LIGHTGRAY
  },
  procuctPrice: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: colors.DARKGRAY
  },
  procuctPieces: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '400',
    color: '#56636D'
  },
});

export default Product;
