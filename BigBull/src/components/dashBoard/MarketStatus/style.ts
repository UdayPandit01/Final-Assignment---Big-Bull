import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  marketItemContainer: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginTop: 0,
    height: 150,
    marginHorizontal: 20,
    backgroundColor: '#908FEC',
    elevation: 6,
  },
  marketText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  marketItemSubContainer: {
    borderRadius: 15,
    marginTop: 20,
    marginHorizontal: 25,
    height: 75,
    backgroundColor: '#F5F5FD',
    elevation: 15,
  },
  tradeDateContainer: {
    borderRadius: 7,
    marginTop: 15,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tradeText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
  },
  marketStatusText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
  Logo: {
    marginTop: 18,
    height: '83%',
    width: '65%',
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
