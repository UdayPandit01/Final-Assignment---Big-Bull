import {StyleSheet} from 'react-native';
import ColorConstants from '../../../assests/ColorPalette';
import ColorPalette from '../../../assests/ColorPalette';
import fonts from '../../../assests/fonts/Fira_Sans';

const styles = StyleSheet.create({
  indexContainer: {
    backgroundColor: ColorPalette.textWhite,
    flex: 1,
  },
  userProfileContainer: {
    height: 50,
    margin: 25,
    marginTop: 40,
    flexDirection: 'row',
  },
  userProfileIconContainer: {
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: ColorPalette.textPurple,
  },

  userProfileTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 45,
  },
  userProfileText: {
    color: ColorPalette.textBlack,
    textAlign: 'center',
    flex: 1,
    paddingRight: 55,
    fontSize: 15,
    fontWeight: '500',
  },
  userProfilesubText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '300',
    paddingRight: 45,
  },
  nifty50Card: {
    borderRadius: 25,
    margin: 30,
    marginTop: 30,
    height: 150,
  },
  nifty50HeadingText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    fontFamily: fonts.BOLD,
  },
  nifty50TimeStamp: {
    color: ColorConstants.textWhite,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
  },
  nifty50PriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: ColorConstants.textWhite,
    elevation: 8,
    shadowColor: ColorConstants.textBlack,
    height: 25,
  },
  nifty50Price: {
    color: ColorConstants.textBlack,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 50,
  },
  nifty50Last:{
    color: ColorConstants.textBlack,
    fontSize: 18,
    fontWeight: '300',
    marginRight: 30,
  },
  gradient: {
    height: 160,
    borderRadius: 25,
  },

  crouselContainer: {
    height: 170,
    marginTop: 50,
  },
  renderItemContainer: {
    height: 128,
    margin: 9,
    backgroundColor: ColorPalette.textBoldGrey,
    opacity: 0.85,
    borderRadius: 30,
    marginTop: 15,
  },
  gradient: {
    height: 180,
    borderRadius: 25,
  },
  renderItemText: {
    color: ColorConstants.textBlack,
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
  showDataConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 55,
    marginTop: 0,
  },
  renderItemContainer_three: {
    height: 58,
    marginTop: 10,
    backgroundColor: ColorPalette.textBlue,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: ColorPalette.textBlack,
  },
  currencyIndicesText: {
    color: ColorPalette.textBlack,
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '700',
  },
  currencyRenderItemText: {
    color: ColorPalette.textWhite,
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
  },
});

export default styles;
