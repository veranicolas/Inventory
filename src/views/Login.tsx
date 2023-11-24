import { StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, Text } from "react-native"
import { CustomButton, CustomInput } from "@/components";
import { useForm } from "react-hook-form";

type LoginProps = StackScreenProps<any, 'Login'>;

const Login = ({navigation}:LoginProps) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email:"",
            password:""
        },
    })

    const handleLogin = (data:any) =>{
        console.log(data)
        navigation.navigate('Main')
    }

    return(
        <View style={style.container}>
            <Text style={{fontSize:50, color:'black'}}>Ingresa!</Text>
            <CustomInput name="email" control={control} placeholder="Ingrese su email"/>
            <CustomInput name="password" control={control} placeholder="Ingrese su clave" secureTextEntry />
            <CustomButton title="login" onPress={handleSubmit(handleLogin)} />
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