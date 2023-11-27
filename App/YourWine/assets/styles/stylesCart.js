import { StyleSheet } from 'react-native';
import Constants from '../../components/Components/Constants';

export const styles2 = StyleSheet.create(
{
    centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22,
 },
 modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
 },
 modalText: {
  marginBottom: 15,
  textAlign: "center",
 },
 openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2,
 },
 textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
 },

  container: {
        flex: 1,
        backgroundColor: '#0A0730',
    },
    scrollView: {
        backgroundColor: '#0A0730',
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT,
    },
    cartMenu:{
      backgroundColor: '#0A0730',
      margin: '20',
    },

    textPrimary:{
      flexWrap: 'wrap', 
      color:'white',
      fontSize:26,
      textAlign:'center',
      fontWeight:'bold',
    },
    textSecondary:{
      color:'gray',
      fontSize:32,
      marginVertical:10
    },
    imagens:{
      width:150,
      height:150,
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 10
    },
    textNenhum:{
      color:'white',
      fontSize:28,
      textAlign:'center',
      textDecorationLine: 'underline',
    },
    textTop:{
      color:'white',
      fontSize:36,
      fontWeight: 'bold',
      textAlign:'center',
      marginVertical: 5
    },

});