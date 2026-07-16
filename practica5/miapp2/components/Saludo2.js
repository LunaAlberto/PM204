import { View, Image, Button } from "react-native";

// declaramos el componente como una función de JS
// devuelve elementos visuales
export const Saludo2 = () => {
    return (
        <View>
            <Image source={require('../assets/wave.png')} />
            <Button title="hola 204" />
        </View>
    );
}