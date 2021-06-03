import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

//style
import colors from '../../style/colors';

//actions
import {
  removeProductFromCart,
  incrementPeoductQuantity,
  decrementProductQuantity 
} from '../../store/actions/cart';

const CartItem = ({ title, image, price, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.productCon}>
      <View style={styles.productTop}>
        <Image
          source={{ uri: image}}
          style={styles.productImg}
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{`N${price}`}</Text>
        </View>
      </View>
      <View style={styles.bottomCon}>
        <TouchableOpacity 
          style={styles.btnCon}
          onPress={() => dispatch(removeProductFromCart(id))}
        >
          <FontAwesome5 name='trash' size={20} color={colors.ORANGE} />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
        <View style={styles.btnCon}>
          <TouchableOpacity 
            style={styles.plusBtn}
            onPress={() => dispatch(incrementPeoductQuantity(id))}
          >
            <AntDesign name='plus' size={10} color='#123CD3' />
          </TouchableOpacity>
          <Text style={styles.qty}>{quantity}</Text>
          <TouchableOpacity
            style={styles.plusBtn}
            onPress={() => dispatch(decrementProductQuantity(id))}
          >
            <AntDesign name='minus' size={10} color='#123CD3' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCon: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.WHITE,
    marginBottom: 16
  },
  productImg: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 16
  },
  productTop: {
    flexDirection: 'row',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#F6F2F2',
    marginBottom: 8
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.SEMIDARKGRAY,
    lineHeight: 21
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.SEMIDARKGRAY,
    lineHeight: 21
  },
  bottomCon: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.SEMIDARKGRAY,
    lineHeight: 21,
    marginLeft: 11
  },
  btnCon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  plusBtn: {
    height: 28,
    width: 28,
    borderWidth: 0.7,
    borderColor: '#123CD3',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qty: {
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 17,
    color: '#0B0C0E'
  }
})

export default CartItem;
