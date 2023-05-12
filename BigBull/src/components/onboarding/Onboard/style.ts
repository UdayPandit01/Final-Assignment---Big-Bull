import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  swiperContainer: {},

  slideContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  slideLogo: {
    height: '62%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  slideText: {
    color: '#03314B',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },

  subHeadingText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14,
    fontWeight: '400',
    color: '#8198A5',
    margin: 10,
    lineHeight: 24,
  },

  bottomText: {
    marginTop: 110,
    fontSize: 14,
    fontWeight: '400',
    color: '#8198A5',

  },

  navigationButton: {
    backgroundColor: '#908FEC',
    borderRadius: 8,
    height: '6%',
    width: '53%',
    justifyContent: 'center',
    padding: 10,
    marginTop: 60,
    padding: 10,

  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },

  dot: {

    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 10,
    borderWidth: 0.5,
  },

  activeDot: {
    backgroundColor: '#908FEC',
    width: 19,
    height: 8,
    borderRadius: 25,
  },
});

export default styles