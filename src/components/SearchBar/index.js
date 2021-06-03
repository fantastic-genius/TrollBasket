import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

//style
import colors from '../../style/colors';

const SearchBar = ({ style, onTermChange, placeholder = "Search", term, onClear }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor='#6F798B'
        onChangeText={onTermChange}
        value={term}
      />
      {term ? (
        <TouchableOpacity style={{ width: 30 }} onPress={() => onClear()} disabled={!term}>
          <AntDesign name="closecircle" size={20} color='#2E4457' />
        </TouchableOpacity>
      ): (
        <Feather name="search" size={24} style={styles.icon} color='#2E4457' />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    marginVertical: 20,
    borderRadius: 4,
    backgroundColor: colors.NEUTRAL,
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 10
  },
  input: {
    flex: 1,
    color: '#6F798B',
    paddingHorizontal: 10
    // fontFamily: 'nunito-bold'
  }
});

export default SearchBar;
