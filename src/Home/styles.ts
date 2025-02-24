import { StyleSheet } from 'react-native';
import themes from '../global/themes';


export const stylesHome = StyleSheet.create({
    container: {
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
        textAlign: 'center'
    }
});