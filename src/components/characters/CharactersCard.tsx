import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {characterCardStyles} from '../../styles/characterStyles';
import {width} from '../../utils/constans';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';
import FastImage from 'react-native-fast-image';
import {Character} from '../../models/character';

// CharactersCard Props Interface
interface CharactersCardProps {
  item: Character;
  index: number;
}

const CharactersCard: React.FC<CharactersCardProps> = ({item, index}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      style={characterCardStyles.container}
      onPress={() => navigation.navigate(CHARACTERDETAIL, {item: item})}>
      <View style={characterCardStyles.imageContainer}>
        <FastImage
          style={{width: width * 0.18, height: width * 0.18, borderRadius: 100}}
          source={{
            uri: item.image,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={characterCardStyles.infoContainer}>
        <Text numberOfLines={1} style={characterCardStyles.name}>
          {item.name}
        </Text>
        <Text style={characterCardStyles.status}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharactersCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
