import React, {useEffect, useState, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {screenWrapper} from '../../styles/screenWrapper';
import {getRequest} from '../../service/verb';
import {CHARACTER_URL} from '../../service/urls';
import {AppColors} from '../../theme/colors';
import CharactersCard from '../../components/characters/CharactersCard';
import SearchBar from '../../components/uı/SearchBar';
import {status} from '../../utils/constans';
import {Character} from '../../models/character';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filterStatus, setFilterStatus] = useState<{
    id: number;
    value: string;
    name: string;
  } | null>(null);
  const [searchText, setSearchText] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const bottomSheet = useRef<BottomSheet>(null);

  const getCharacter = async () => {
    setLoading(true);
    try {
      const response = await getRequest(CHARACTER_URL);
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filterCharacter = async () => {
    try {
      const response = await getRequest(CHARACTER_URL, {
        name: searchText,
        status: filterStatus?.value,
      });
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchCharacter = async () => {
    if (searchText) {
      try {
        const response = await getRequest(CHARACTER_URL, {name: searchText});
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenWrapper.container}>
        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={600}
          sheetBackgroundColor={AppColors.GREEN}
          onRequestClose={() => {
            bottomSheet.current?.close();
          }}>
          <View style={{flex: 1, backgroundColor: AppColors.GREEN}}>
            <Text style={{margin: 5, fontSize: 24, color: AppColors.WHITE}}>
              Status
            </Text>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => {
                  setFilterStatus(item);
                }}
                key={item.id}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: AppColors.WHITE,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    filterStatus?.value === item.value
                      ? AppColors.WHITE
                      : AppColors.GREEN,
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => {
              bottomSheet.current?.close();
              filterCharacter();
            }}
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: AppColors.WHITE,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              backgroundColor: AppColors.WHITE,
              height: 50,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Filtrele</Text>
          </TouchableOpacity>
        </BottomSheet>
        {loading ? (
          <View style={screenWrapper.loadingWrapper}>
            <ActivityIndicator color={AppColors.WHITE} size={'large'} />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              <SearchBar
                openModal={() => bottomSheet.current?.show()}
                setSearchText={setSearchText}
                searchText={searchText}
                searchCharacter={searchCharacter}
              />
            }
            data={characters}
            renderItem={({item, index}) => (
              <CharactersCard item={item} index={index} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Characters;

const styles = StyleSheet.create({});
