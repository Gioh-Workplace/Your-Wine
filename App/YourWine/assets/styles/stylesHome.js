import { StyleSheet } from 'react-native';
import Constants from '../../components/Components/Constants';

export const styles2 = StyleSheet.create(    
{
    menuVinhosBa1:{
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5, 
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    
    menuVinhosBa11:{
        backgroundColor: '#13072b',
        width: Constants.MAX_WIDTH * 0.4,
        borderRadius: 5,
        margin: 5,
        height: Constants.MAX_HEIGHT * 0.10,
    },

    menuVinhosBa1Image:{
        width: 75,
        height: 75,
        borderRadius: 15,
        resizeMode: 'stretch',
        margin: 5,
    },

    textoVinhosBa:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        textAlign: 'right',
        right: 0,
        marginRight: 10,
        marginTop: 25,
        borderColor: 'black',
        borderStyle: 'solid',
        textShadowColor: '#691823',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1,
    },

    novidadesVinhos:{
        color: '#691823',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 0,
        marginTop: 10,
        marginBottom: 6,
        borderColor: 'black',
        borderStyle: 'solid',
        textShadowColor: '#fff',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 2,
    },

    menuVinhosBa2:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    menuVinhosBa22:{
        backgroundColor: '#03001F',
        width: Constants.MAX_WIDTH * 0.45,
        borderRadius: 15,
        margin: 5,
        height: Constants.MAX_HEIGHT * 0.25,
    },

    menuVinhosBa2Image:{
        width: 160,
        height: 180,
        borderRadius: 15,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        marginTop: 25,
        position: 'absolute',
    },
    
    textoVinhospromocao1:{
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        right: 0,
        marginRight: 10,
        marginTop: 140,
        textDecorationLine: 'line-through',
    },

    textoVinhospromocao2:{
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'right',
        right: 0,
        marginRight: 5,
    },
})