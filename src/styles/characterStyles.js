import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {width} from '../utils/constans';

const characterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BLACK,
  },
});

const characterCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.GREEN,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: AppColors.WHITE,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {color: AppColors.WHITE},

  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {characterScreenStyles, characterCardStyles};
