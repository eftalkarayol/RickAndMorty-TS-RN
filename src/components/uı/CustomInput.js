import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {height, width} from '../../utils/constans';

const CustomInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        keyboardType="default"
        clearButtonMode="always"
        returnKeyType="search"
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.BLACK,
  },
  input: {
    backgroundColor: AppColors.WHITE,
    minHeight: height / 20,
    borderRadius: 10,
    fontSize: 24,
    paddingHorizontal: 20,
    flex: 1,
    width: width / 1.2,
    marginRight: 5,
  },
});
