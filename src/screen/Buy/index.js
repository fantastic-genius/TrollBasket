import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign';

//style
import colors from '../../style/colors';

//svg
import LocationIcon from '../../assets/svg/Location.svg';
import Package from '../../assets/svg/Package.svg';
import Cart from '../../assets/svg/Cart.svg';
import Document from '../../assets/svg/Document.svg';
import Fire from '../../assets/svg/Fire.svg';
import Like from '../../assets/svg/Like.svg';
import Shop from '../../assets/svg/Shop.svg';


//components
import SearchBar from '../../components/SearchBar';
import CarouselCard from '../../components/CarouselCard';
import Menu from '../../components/Menu';
import Product from '../../components/Product';

//demo
import products from '../../demo/products';

const carouselItems = [
  {
    content: 'Having any issues with your order?',
    actionText: "Contact Us",
    backgroundColor: colors.PRIMARY
  },
  {
    content: <Text>Having any <Text style={{color: colors.ORANGE}}>issues</Text> with your order?</Text>,
    actionText: "Contact Us",
    backgroundColor: colors.PRIMARYDARK
  },
  {
    content: 'Having any issues with your order?',
    actionText: "Contact Us",
    backgroundColor: colors.ORANGE
  },
];

const menuItems = [
  {
    title: 'Product Categories',
    icon: Document,
    backgroundColor: colors.PRIMARY
  },
  {
    title: 'Popular Products',
    icon: Fire,
    backgroundColor: colors.ORANGE
  },
  {
    title: 'Recommended Products',
    icon: Like,
    backgroundColor: colors.PURPLE
  },
  {
    title: 'Shops',
    icon: Shop,
    backgroundColor: colors.GREEN
  }
];


const Buy = () => {
  const cartProducts = useSelector(s => s.cart.data); 
  const [currentProducts, setCurrentProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('All');

  const renderCarouselItem = ({ item }) => (
    <CarouselCard
      content={item.content}
      actionBtnText={item.actionText}
      style={{ backgroundColor: item.backgroundColor }}
    />
  );

  const loadMenus = menuItems.map(menu => (
    <Menu 
      title={menu.title}
      icon={menu.icon}
      iconContainerStyle={{backgroundColor: menu.backgroundColor}}
    />
  ));

  const renderProduct = ({ item }) => {
    const prices = item.price.split('-');
    return (
      <Product
        title={item.name}
        quantity={item.stock}
        minPrice={prices[0]}
        maxPrice={prices[1]}
        image={item.image}
        id={item.id}
      />
    )
  };

  const handleSearch = (term) => {
    setSearchQuery(term);

    if(term){
      const filteredProducts = products.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
      setCurrentProducts(filteredProducts);
    }else{
      setCurrentProducts(products);
    }
    
  }

  const handleSearchByLocation = (location) => {
    setLocation(location)
    if(location !== 'All'){
      const filteredProducts = products.filter(product => product.location.toLowerCase().includes(location.toLowerCase()));
      setCurrentProducts(filteredProducts);
    }else{
      setCurrentProducts(products);
    }    
  }

  const clearSearch = () => {
    setSearchQuery('');
    setCurrentProducts(products);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topMenuCon}>
        <View style={styles.itemCon}>
          <View style={styles.iconCircle}>
            <LocationIcon />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <RNPickerSelect
            onValueChange={handleSearchByLocation}
            items={[
                { label: 'All', value: 'All' },
                { label: 'Lagos', value: 'Lagos' },
                { label: 'Owerri', value: 'Owerri' },
                { label: 'Abuja', value: 'Abuja' },
                { label: 'Ibadan', value: 'Ibadan' },
            ]}
            placeholder="Location"
            style={{
              inputAndroid: {
                backgroundColor: 'transparent',
                ...styles.text,
                paddingHorizontal: 5,
                paddingVertical: 0,
                paddingRight: 0
              },
            }}
            useNativeAndroidPickerStyle={false}
            value={location}
          />
          <AntDesign name='down' size={20} color={colors.DARKGRAY} />
          </View>
        </View>
        <View  style={styles.verticalLine} />
        <View style={styles.itemCon}>
          <View style={styles.iconCircle}>
            <Package />
          </View>
          <Text style={styles.text}>My Orders</Text>
        </View>
        <View  style={styles.verticalLine} />
        <TouchableOpacity style={styles.itemCon} onPress={() => Actions.carts()}>
          <View style={styles.iconCircle}>
            <View style={styles.cartNumberCon}>
              <Text style={styles.cartNumber}>{cartProducts.length}</Text>
            </View>
            <Cart />
          </View>
          <Text style={styles.text}>Cart</Text>
        </TouchableOpacity>
        <View />
      </View>
      <View style={styles.body}>      
        <View style={styles.searchCon}>
          <SearchBar 
            placeholder='Search merchbuy'
            term={searchQuery}
            onTermChange={text => handleSearch(text)}
            onClear={clearSearch}
          />
        </View>
        <FlatList
          data={currentProducts}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderProduct}
          columnWrapperStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
          numColumns={3}
          ListHeaderComponent={(
            <View>
              <View style={{ height: 150 }}>
                <FlatList
                  data={carouselItems}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderCarouselItem}
                />
              </View>
              <View style={styles.midMenuCon}>
                {loadMenus}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  topMenuCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
    marginVertical: 2
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
  itemCon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  verticalLine: {
    borderLeftWidth: 1,
    borderColor: '#CBD6E0',
    height: '100%'
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.DARKGRAY
  },
  body: {
    backgroundColor: colors.WHITE,
    flex: 1
  },
  searchCon: {
    paddingHorizontal: 16
  },
  midMenuCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20
  },
  productImg: {
    height: 98,
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

export default Buy;
