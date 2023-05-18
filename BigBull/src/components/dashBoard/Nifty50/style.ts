import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    height: 50,
    margin: 11,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    backgroundColor: '#908FEC',
    elevation: 10,
    shadowColor: 'black',
  },

  searchBarText: {
    marginLeft: 40,
    color: 'white',
    fontSize: 17,
  },
  itemContainer: {
    backgroundColor: '#62CDFF',
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
