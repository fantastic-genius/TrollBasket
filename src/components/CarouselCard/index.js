import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

//style
import colors from '../../style/colors';

const { width } = Dimensions.get('screen');

const CarouselCard = ({ content, actionBtnText, style }) => {

  return (
    <View style={{...styles.horizontalCard, ...style}}>
      <Text style={styles.cardText}>{content}</Text>
      <View>
        <TouchableOpacity style={styles.cardBtn}>
          <Text style={styles.btnText}>{actionBtnText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalCard: {
    backgroundColor: colors.PRIMARYDARK,
    height: 140,
    borderRadius: 4,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginHorizontal: 8
  },
  cardText: {
    color: colors.WHITE,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    flex: 2,
    marginRight: 4
  },
  cardBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.PRIMARY,
    borderRadius: 4,
  },
  btnText: {
    color: colors.WHITE,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15
  }
});

export default CarouselCard;
