import React from "react";
import { ImageBackground, Text, estilo } from "react-native";
import imgcapa from "../../assets/capa.jpg"

export default function TelaInicial () {
  
  return (
    <ImageBackground
        source={imgcapa}
    >
        <Text>a</Text>
        <Text>b</Text>
    </ImageBackground>
  )
}
