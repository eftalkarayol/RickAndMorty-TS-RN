import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verb';
import {CHARACTER_URL} from '../../service/urls';
import {screenWrapper} from '../../styles/screenWrapper';
import {AppColors} from '../../theme/colors';
import {height, width} from '../../utils/constans';

const CharacterDetail = ({route}) => {
  const {item} = route.params;
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCharacter = async () => {
    setLoading(true);
    getRequest(`${CHARACTER_URL}/${item.id}`)
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <View style={screenWrapper.container}>
      <View
        style={{
          backgroundColor: AppColors.GREEN,
          height: height / 2,
          margin: 10,
          borderStartStartRadius: 50,
          borderEndEndRadius: 50,
          padding: 15,
        }}>
        <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
          {character.status}
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Image
            source={{uri: character.image}}
            style={{width: width / 1.7, height: width / 1.7, borderRadius: 10}}
          />
          <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
            {character.name}
          </Text>
          <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
            {character.species}
          </Text>
        </View>
        <Text style={{fontSize: 18, margin: 5, color: AppColors.WHITE}}>
          {character.gender}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: AppColors.GREEN,
          height: height / 4,
          margin: 10,
        }}>
        <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
          Origin
        </Text>
        <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
          {character?.origin?.name}
        </Text>
        <Text style={{fontSize: 24, margin: 10, color: AppColors.WHITE}}>
          Location
        </Text>
        <Text style={{fontSize: 18, margin: 10, color: AppColors.WHITE}}>
          {character?.location?.name}
        </Text>
      </View>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({});
