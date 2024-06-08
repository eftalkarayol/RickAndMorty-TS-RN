import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const resizeModes = {
  COVER: 'cover',
  CONTAIN: 'contain',
  CENTER: 'center',
};

const status = [
  {id: 1, name: 'Alive', value: 'alive'},
  {id: 2, name: 'Dead', value: 'dead'},
  {id: 3, name: 'Unknown', value: 'unknown'},
];

export {width, height, resizeModes, status};
