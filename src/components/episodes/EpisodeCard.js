import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {AppColors} from '../../theme/colors';
import {ArrowRight, ArrowRight2} from 'iconsax-react-native';

const EpisodeCard = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.GREEN,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: AppColors.WHITE,
            fontSize: 18,
            marginVertical: 5,
            fontWeight: 'bold',
          }}>
          {item.episode}
        </Text>
        <Text>{item.name}</Text>
      </View>
      <ArrowRight2 color={AppColors.WHITE} size={25} />
    </TouchableOpacity>
  );
};

export default memo(EpisodeCard);

const styles = StyleSheet.create({});
