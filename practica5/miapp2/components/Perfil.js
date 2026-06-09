


/* perfil usando destructuracion */
import { View, Text,Button } from "react-native";
import React,{useState} from "react";

export const Perfil = ({nombre, carrera, materia, cuatri}) => {
    const[mostrar,setMostrar]=useState(false);
    return (
        <View>
            <Text>Nombre: {nombre}</Text>
            {mostrar &&
            <>
            <Text>Carrera: {carrera}</Text>
            <Text>Materia: {materia}</Text>
            <Text>Cuatrimestre: {cuatri}</Text>
            </>
    }
    <Button title="ver perfil" onPress={()=>setMostrar(!mostrar)}/>
        </View>
            
    );
}




/*import { View, Text } from "react-native";

export const Perfil = (props) => {

    return (

        <View>

            <Text>{props.nombre}</Text>

            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
    )
    
}
    */