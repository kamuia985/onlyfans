import { Image, ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';
import { View } from "react-native-web";


const Cardvinho = ({props, vinhos})=>{
    return(
        <View
            style={estilo.cardVinho}
            onTouchEnd={() => {props.navigation.navigate('Detalhes',vinhos)}}
        >
            <Image
                style={estilo.vinhos}
                source={vinhos.imagem}
            /> 
            <Text style={estilo.titulo}>{vinhos.modelo}</Text>
        </View>

    );
}


const estilo = StyleSheet.create({
    cardVinho:{
        width: 350,    
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 10,
        
    },
    vinhos:{
        width: 25,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10            
    },    
    titulo:{
        width: '100%',
        padding:5,
        textAlign: "center" ,
        marginTop: 30
    }
  });
  
  export default Cardvinho;