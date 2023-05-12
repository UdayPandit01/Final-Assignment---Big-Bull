import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  nifty50Card: {
    // borderWidth: 1,
    borderRadius: 25,
    margin: 30,
    marginTop: 30,
    height: 150,
  },
  gradient: {
    height: 160,
    borderRadius: 25,
  },

  crouselContainer: {
    height: 170,
    marginTop: 35,
  },
  renderItemContainer: {
    height: 128,
    margin: 9,
    backgroundColor: '#D8D8D8',
    opacity: 0.85,
    borderRadius: 30,
    marginTop: 15,
  },
  gradient: {
    height: 180,
    borderRadius: 25,
  },
  renderItemText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 18,
  },
  renderItemSubText: {
    fontWeight: '300',
    color: 'black',
    marginTop: 15,
  },
  renderItemContainer_three: {
    height: 58,
    marginTop: 15,
    // marginBottom:70,
    backgroundColor: '#4B0DCF',
    // backgroundColor:'#908FEC',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#908FEC',
  },
});

export default styles;

