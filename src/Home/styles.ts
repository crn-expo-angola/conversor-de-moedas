import { StyleSheet } from 'react-native';
import themes from '../global/themes';

export const stylesHome = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
      backgroundColor: themes.colors.principal,
      width: '100%',
      height: 150,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  Title: {
    fontFamily: themes.fonts.midium,
    color: themes.colors.fundo,
    fontSize: 18,
    bottom: 30
  },
  Form: {
      paddingHorizontal: 40,
      paddingVertical: 60
  },
  Input: {
      borderWidth: 1,
      borderColor: themes.colors.title,
      borderRadius: 5,
      width: '100%',
      height: 50,
      textAlign: 'center',
      backgroundColor: '#fff',
      fontSize: 16,
      paddingHorizontal: 10,
      justifyContent: 'center',
  },
  PickerSelect: {
      borderWidth: 1,
      borderColor: themes.colors.title,
      borderRadius: 5,
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      justifyContent: 'center',
      marginTop: 20
  },
  areaResult:{
    marginTop: 20
  },
  titleResult:{
    fontFamily: themes.fonts.regular,
    fontSize: 14
  },
  areaValor:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  areaMoeda:{
    backgroundColor: themes.colors.principal,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  textoMoeda:{
    fontFamily: themes.fonts.midium,
    fontSize: 18,
    color: themes.colors.title
  },
  valor:{
    fontFamily: themes.fonts.bold,
    fontSize: 18,
    marginBottom: -10,
    alignSelf: 'flex-end'
  },
  titleMoeda:{
    fontFamily: themes.fonts.regular
  }
});
