import { StyleSheet } from 'react-native';
import Constants from '../../components/Constants/Constants';

export const styles = StyleSheet.create(    
{
    container: {
        flex: 1,
        backgroundColor: '#691823',
    },

    texto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    menuDeCima:{
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT * 0.13,
        backgroundColor: '#691823',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    logo:{
        width: Constants.MAX_WIDTH * 0.25,
        height: Constants.MAX_HEIGHT * 0.25,
        resizeMode: 'contain',
    },

    logo2:{
        width: Constants.MAX_WIDTH * 0.35,
        height: Constants.MAX_HEIGHT * 0.35,
        resizeMode: 'contain',
    },

    mainPage:{
        backgroundColor: '#FFE4AE',
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT,
    },

    scrollView: {
        backgroundColor: '#FFE4AE',
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT,
    },

    preguica:{
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT * 0.5,
        backgroundColor: '#691823',
    },
})