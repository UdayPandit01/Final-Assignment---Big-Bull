import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#908FEC',
  },

  headingContainer: {
    marginTop: 110,
    marginBottom: 30,
  },

  headingText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 45,
    padding: 0,
  },

  tagLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 5,
  },

  tagLineText: {
    fontSize: 21,
    alignItems: 'center',
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },

  rocketLogo: {
    padding: 0,
    height: '50%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: '50%',
    width: '50%',
    marginTop: 120,
    paddingLeft: 25,
  },
});

export default styles;
