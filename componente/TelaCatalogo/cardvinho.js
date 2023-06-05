import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';


const Cardvinho = ({props, vinhos})=>{
    return(
        <ImageBackground                                 
            style={estilo.vinhos}
            source={vinhos.imagem}
            borderRadius={10}
            resizeMode="cover"
            onTouchEnd={() => {props.navigation.navigate('Detalhes',vinhos)}}  
        >
            <Text style={estilo.titulo}>{vinhos.modelo}</Text>
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    vinhos:{
        width: 360,
        height: 900,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 20               
    },    
    titulo:{
        padding:5,
        backgroundColor: "rgba(255, 255, 255, 0.4)"
    }
  });
  
  export default Cardvinho;