import { StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, Text, TextInput } from "react-native"

import { CustomButton } from "../components/CustomButton";

type LoginProps = StackScreenProps<any, 'Login'>;

const Login = ({navigation}:LoginProps) => {

    const handleLogin = () =>{
        navigation.navigate('Main')
    }

    return(
        <View style={style.container}>
            <Text style={{fontSize:50, color:'black'}}>Ingresa!</Text>
            <TextInput placeholderTextColor={'grey'} style={style.inputs} placeholder="Ingrese su email"/>
            <TextInput textContentType="password" secureTextEntry placeholderTextColor={'grey'} style={style.inputs} placeholder="Ingrese su clave"/>
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