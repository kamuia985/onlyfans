import { Image, Text, View } from "react-native";
import { StyleSheet} from 'react-native';

const Detalhes = (props)=>{
    let vinhos  = props.route.params;
    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>{vinhos.modelo}</Text>
            <Image source={vinhos.imagem} style={estilo.img}/>
            <View style={estilo.mais}>
                
            </View>
        </View>  
    );
}


const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img:{
        width:'95vw',
        height: '50vw'
    },
    titulo:{
        fontSize: 22,       
        color: "#222",
        fontWeight: '700',
        marginVertical: 10
    },
    preco:{
        fontSize: 20,
        margin:5,
        textAlign: 'left'
    },
    preco:{
        fontSize: 20,
        margin:5,
        textAlign: 'left'
    },
    mais:{
        width: '95vw',
        alignItems: 'flex-start'
    },
    descricao_titulo:{
        fontSize: 20,
        marginTop:10,
        fontWeight: '500',
        textAlign: 'left'
    },
    descricao:{
        fontSize: 16,
        textAlign: 'justify'
    }
  });
  
  export default Detalhes;