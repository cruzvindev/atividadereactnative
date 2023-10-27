import React from "react";
import { View, Text } from "react-native";
import Estilos from "../estilos.jsx";

const MaxMin = ({x, y}) => {
    
    if(x > y){
        return <Text style = {Estilos.text}> Valor {x} é maior que o valor {y} </Text>
    }else if(x === y){
        return <Text style = {Estilos.text}> Valor {x} é igual ao valor {y} </Text>
    }else {
        return <Text style = {Estilos.text}> Valor {x} é menor que o valor {y} </Text>
    }
};

export default MaxMin;