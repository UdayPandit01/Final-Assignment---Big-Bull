import {StyleSheet} from 'react-native';
import ColorConstants from '../../../assests/ColorPalette';
import ColorPalette from '../../../assests/ColorPalette';

const styles = StyleSheet.create({
  userProfileContainer: {
    height: 50,
    margin: 25,
    marginTop: 40,
    flexDirection: 'row',
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
});

export default styles;
