import { StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, Text } from "react-native"
import { CustomButton, CustomInput } from "../components";

type LoginProps = StackScreenProps<any, 'Login'>;

const Login = ({navigation}:LoginProps) => {

    const handleLogin = () =>{
        navigation.navigate('Main')
    }

    return(
        <View style={style.container}>
            <Text style={{fontSize:50, color:'black'}}>Ingresa!</Text>
            <CustomInput placeholder="Ingrese su email"/>
            <CustomInput placeholder="Ingrese su clave" secureTextEntry />
            <CustomButton title="login" onPress={handleLogin} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        gap: 25
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 10,
        borderRadius: 6
    }
})

export { Login }