import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {screenWrapper} from '../../styles/screenWrapper';
import {EPISODES_URL} from '../../service/urls';
import {getRequest} from '../../service/verb';
import {AppColors} from '../../theme/colors';
import EpisodeCard from '../../components/episodes/EpisodeCard';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  const [loading, setLoading] = useState(false);

  const getEpisodes = async () => {
    setLoading(true);
    getRequest(EPISODES_URL)
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <View style={screenWrapper.container}>
      {loading ? (
        <View style={screenWrapper.loadingWrapper}>
          <ActivityIndicator color={AppColors.WHITE} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={episodes}
          renderItem={({item, index}) => <EpisodeCard item={item} />}
        />
      )}
    </View>
  );
};

export default Episodes;

const styles = StyleSheet.create({});
