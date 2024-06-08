import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import CustomInput from './CustomInput';
import {FilterSquare} from 'iconsax-react-native';

const SearchBar = ({openModal, setSearchText, searchText, searchCharacter}) => {
  return (
    <View style={styles.container}>
      <CustomInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Search"
        onSubmitEditing={() => searchCharacter()}
      />
      <TouchableOpacity
        onPress={openModal}
        style={{
          backgroundColor: AppColors.GREEN,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FilterSquare size={'32'} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },
});
