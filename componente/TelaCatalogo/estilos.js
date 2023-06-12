import { StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a0a377',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      alignItems: 'center',
    },
    container3: {
      flex: 1,
      backgroundColor: '#a0a007',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    
    head:{
      paddingVertical: 19,
      paddingStart:8,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      flexDirection: 'row'
  },
  head_title:{
      fontSize: 18,
      fontWeight: '500',
      color: '#444',
      marginHorizontal: 7
  },
  body:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
  },
  slides:{
     flexDirection: 'row',
     width: 400,
     height: 300
  },
  foto:{
      width: 450,
      height: 320,
  },
  info:{
      width: 350,
      textAlign: 'left'
  },

  });
  
export default estilo;