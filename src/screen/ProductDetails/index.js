import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch, useSelector } from 'react-redux';

//style
import colors from '../../style/colors';

//images
import Avatar from '../../assets/images/user.png';

//actions
import { getSingleProduct, getSingleProductCleanup } from '../../store/actions/get-single-product';
import { addProduct } from '../../store/actions/cart';

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const getSingleProductState = useSelector(s => s.getSingleProduct)
  const cartState = useSelector(s => s.cart);
  const [existInCart, setExistInCart] = useState(false);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  },[]);

  useEffect(() => {
    if(getSingleProductState.isSuccessful){
      setProduct(getSingleProductState.data);
      dispatch(getSingleProductCleanup());
    }else if(getSingleProductState.error){
      dispatch(getSingleProductCleanup());
    }
  },[getSingleProductState]);

  useEffect(() => {
    if(cartState.data && cartState.data.length){
      const product = cartState.data.find(product => product.id === id);
      if(product){
        setExistInCart(true);
      }
    }
  },[cartState])




  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollCon}>
        {getSingleProductState.isLoading ? (
          <ActivityIndicator color={colors.PRIMARY} />
        ) : product ? (
          <View>
            <View style={styles.imgCon}>
              <Image 
                source={{ uri: product.image}} 
                style={styles.img}
              />
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.price}>
                {`N${product.price.split('-')[0]} - N${product.price.split('-')[1]}`} <Text style={styles.description}>/piece</Text>
              </Text>
            </View>
            <View style={{...styles.contentCon , ...styles.descriptionCon}}>
              <Text style={styles.title}>Product Description</Text>
              <TouchableOpacity>
                <Ionicons name='chevron-forward' size={24} color='#0B0C0E' />
              </TouchableOpacity>
            </View>
            <View style={styles.contentCon}>
              <View style={styles.descriptionCon}>
                <Text style={styles.title}>Review and Ratings</Text>
                <TouchableOpacity>
                  <Text style={styles.more}>See More</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ratingCon}>
                <AirbnbRating
                  isDisabled
                  count={5}
                  defaultRating={3}
                  showRating={false}
                  size={24}
                  unSelectedColor='#EEEFF2'
                />
              </View>
              <Text style={styles.description}>This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!</Text>
              <View style={styles.reviewer}>
                <View style={styles.avatar}>
                  <Image source={Avatar} />
                </View>
                <Text>Segun Arinze</Text>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
      {product ? (
        <View style={styles.btnCon}>
          <TouchableOpacity 
            style={styles.addBtn}
            onPress={() => dispatch(addProduct(id))}
            disabled={existInCart}
          >
            <Text style={styles.addText}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistBtn}>
            <Text style={styles.wishlistText}>Wishlist</Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
  imgCon: {
    height: 206,
    marginHorizontal: 32,
    marginVertical: 16,
    borderRadius: 4,
    flexDirection: 'row'
  },
  img: {
    height: 206,
    width: '100%',
    borderRadius: 4
  },
  contentCon: {
    backgroundColor: colors.WHITE,
    padding: 16,
    marginBottom: 4
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.SEMIDARKGRAY,
    lineHeight: 21
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.MEDIUMGRAY,
    lineHeight: 21
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.SEMIDARKGRAY,
    lineHeight: 21,
    marginTop: 16
  },
  descriptionCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  more: {
    color: colors.PRIMARY
  },
  reviewer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.NEUTRAL
  },
  ratingCon: {
    marginVertical: 16,
    alignItems: 'flex-start'
  },
  btnCon: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: colors.WHITE,
    flexDirection: 'row'
  },
  addBtn: {
    backgroundColor: colors.PRIMARY,
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 8
  },
  addText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: colors.WHITE,
    textAlign: 'center',
    paddingVertical: 12,
  },
  wishlistBtn: {
    backgroundColor: colors.WHITE,
    flex: 1,
    borderColor: '#2E4457',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 8
  },
  wishlistText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: '#2E4457',
    textAlign: 'center',
    paddingVertical: 12
  }
});

export default ProductDetails;
