import { StyleSheet } from 'react-native';
import Constants from '../../components/Constants/Constants';

export const styles = StyleSheet.create(
{
    renderItem:{
        backgroundColor:'white',
        borderRadius: 5,
        height: Constants.MAX_HEIGHT * 0.2,
        padding: 5,
        marginLeft: 10,
        marginRight: 15,
    },

    renderItemText:{
        fontSize: 17,
        marginTop: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1,
    },

    safeAreaView:{
        flex: 1, paddingTop: 10,
    },

    view:{
        flexDirection:'row', justifyContent: 'center',
    },

    imageBackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
}
)