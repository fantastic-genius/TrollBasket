import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilICons from 'react-native-vector-icons/EvilIcons';

//svg
import HomeIcon from '../../assets/svg/Home.svg';
import Tag from '../../assets/svg/Tag.svg';
import Wallet from '../../assets/svg/Wallet.svg';
import Hamburger from '../../assets/svg/Hamburger.svg';

//style
import colors from '../../style/colors';


const CustomTabBar = ({ navigation }) => {
  const { state } = navigation;
  const activeTabIndex = state.index;
  const icons = {
    home: <HomeIcon />,
    buy: activeTabIndex === 1 ? <Entypo name='shopping-cart' size={24} color={colors.PRIMARY} /> : <EvilICons name='cart' size={24} color={colors.LIGHTGRAY} />,
    deals: <Tag />,
    wallet: <Wallet />,
    more: <Hamburger />
  }

  return (
    <View style={styles.container}>
      {
        state.routes.map(element => (
          <TouchableOpacity key={element.key} onPress={() => Actions[element.key]()} style={styles.itemCon}>
            <View style={styles.icon}>{icons[element.key]}</View>
            <Text>{element.key.toUpperCase()}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: colors.WHITE
  },
  itemCon: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    marginBottom: 8
  }
})

export default CustomTabBar;
