import {StyleSheet} from 'react-native';
import fonts from '../../../assests/fonts/Fira_Sans';
import ColorConstants from '../../../assests/ColorPalette';
import ColorPalette from '../../../assests/ColorPalette';

const styles = StyleSheet.create({
  marketItemContainer: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginTop: 0,
    height: 150,
    marginHorizontal: 20,
    backgroundColor: ColorPalette.textPurple,
    elevation: 6,
  },
  marketText: {
    color: ColorPalette.textWhite,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.BOLD,
    // fontFamily:'fira'
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
    color: ColorPalette.textBlack,
    fontSize: 15,
    fontWeight: '300',
  },
  marketStatusText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    color: ColorPalette.textBlack,
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
