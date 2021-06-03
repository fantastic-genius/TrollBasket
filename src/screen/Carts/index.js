import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView , Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

//style
import colors from '../../style/colors';

//components
import CartItem from '../../components/CartItem';
import Product from '../../components/Product';

//demo
import products from '../../demo/products';

const { width } = Dimensions.get('screen');

const Carts = () => {
  const cartProducts = useSelector(s => s.cart.data);
  const [totalAmount, setTotalAmount] = useState(0);

  const loadRelatedProducts = products.slice(0,3).map(product => {
    const prices = product.price.split('-');

    return (
      <View style={{ width: width * 0.3}}>
        <Product
          title={product.name}
          quantity={product.stock}
          minPrice={prices[0]}
          maxPrice={prices[1]}
          image={product.image}
          id={product.id}
        />
      </View>
    );
  });

  const loadCartItems = cartProducts.length ? cartProducts.map(product => {
    return (
      <CartItem
        image={product.image}
        title={product.name}
        quantity={product.quantity || 0}
        price={product.price.split('-')[0]}
        id={product.id}
      />
    );
  }) : (
    <Text style={{ textAlign: 'center'}}>No Product in Cart</Text>
  );

  const handleTotal = () => {
    let total = 0;
    cartProducts.forEach(product => {
      const price = parseFloat(product.price.split('-')[0]);
      total += price * product.quantity;
    });
    setTotalAmount(total.toFixed(2));
  }

  useEffect(() => {
    if(cartProducts && cartProducts.length){
      handleTotal();
    }
  },[cartProducts])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingHorizontal: 16, paddingTop: 16}}>
          {loadCartItems}
        </View>
        <View style={styles.contentCon}>
          <View style={styles.textCon}>
            <Text style={styles.title}>Subtotal</Text>
            <Text style={styles.title}>{`N${totalAmount}`}</Text>
          </View>
          <View style={styles.textCon}>
            <Text style={styles.title}>Total</Text>
            <Text style={styles.price}>{`N${totalAmount}`}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentCon}>
          <View style={styles.textCon}>
            <Text style={styles.title}>Recently viewed</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.relatedProductsCon}>
            {loadRelatedProducts}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  scrollCon: {
    flexGrow: 1,
    paddingBottom: 100
  },
  contentCon: {
    backgroundColor: colors.WHITE,
    padding: 16,
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
  textCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  checkoutBtn: {
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: colors.PRIMARY
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.WHITE
  },
  viewAll: {
    color: colors.PRIMARY
  },
  relatedProductsCon: {
    flexDirection: 'row'
  }
});

export default Carts;
