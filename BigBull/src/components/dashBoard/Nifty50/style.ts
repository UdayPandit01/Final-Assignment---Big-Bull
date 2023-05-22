import {StyleSheet} from 'react-native';
import ColorConstants from '../../../assests/ColorPalette';
import ColorPalette from '../../../assests/ColorPalette';

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    width:'93%',
    height: 45,
    margin: 11,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    backgroundColor: ColorPalette.textPurple,
    elevation: 10,
    shadowColor: 'black',
  },

  searchBarText: {
    marginLeft: 30,
    color: ColorPalette.textWhite,
    fontSize: 17,
  },
  itemContainer: {
    backgroundColor: ColorPalette.textSky,
    opacity: 0.9,
    borderRadius: 15,
    height: 110,
    padding: 10,
    margin: 7,
    marginHorizontal: 16,
    elevation: 10,
    shadowColor: 'black',
  },
});
export default styles;
