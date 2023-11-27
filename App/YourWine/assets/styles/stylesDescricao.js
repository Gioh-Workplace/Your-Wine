import { StyleSheet } from 'react-native';
import Constants from '../../components/Components/Constants';

export const styles = StyleSheet.create(
{
  textPrimary: {
    color:'white',
    fontSize: 32,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
    marginBottom: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  textSecondary: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },

  overlayStyle:{
    backgroundColor: '#0A0730',
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT * 0.70,
  },
  suaImagemStyle:{
    resizeMode: 'contain',
    maxHeight: 370,
    maxWidth: 370,
    alignItems: 'center'
  },
  textDesc:{
    color:'white',
      fontSize: 24,
     fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
    marginLeft: 10
  },
  textPreco:{
    color:'white',
      fontSize: 24,
     fontWeight: 'bold',
     textDecorationLine: 'line-through',
  
  },
  textPreco2:{
    color:'white',
      fontSize: 26,
     fontWeight: 'bold',
    textDecorationLine: 'underline',
  
  },
   textProx:{
    color:'white',
      fontSize: 24,
     fontWeight: 'bold',
  
  },
  
});