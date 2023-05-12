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
    elevation: 9,
    shadowColor: 'black',
  },
  searchBarText: {
    marginLeft: 40,
    color: 'black',
    fontSize: 17,
  },
  // gradient: {
  //       height: 110,
  //       borderRadius: 25,
  //       opacity: 0.9,
  //   // borderWidth: 1,
  //   borderRadius: 15,
  //   height: 110,
  //   padding: 10,
  //   margin: 7,
  //   marginHorizontal: 16,
  //   elevation: 10,
  //   shadowColor: 'black',
  //     },
  itemContainer: {
    backgroundColor: '#62CDFF',
    // backgroundColor: '#F61C7A',
    opacity: 0.9,
    // borderWidth: 1,
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
