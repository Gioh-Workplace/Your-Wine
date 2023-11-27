import { StyleSheet } from 'react-native';
import Constants from '../../components/Components/Constants';

export const styleSearch = StyleSheet.create(  
{
  flexContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    fontSize: 15,
    height: 40,
    width: 380,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 0
  },
   precovinho:{
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        right: 0,
        marginRight: 5,
         marginTop: 110,
        
    },
    texto:{
      color:'white',
       fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      right: 0,
      marginRight: 5,
      marginTop:5
    }
}
);