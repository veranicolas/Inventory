import { TextInput, StyleSheet, Text, View} from "react-native"

type TextInputProps = {
    placeholder:string,
    secureTextEntry?:boolean
}

export const CustomInput = ({placeholder, secureTextEntry = false}:TextInputProps) =>{
    return(
        <View>
            <TextInput secureTextEntry={secureTextEntry} placeholderTextColor={'grey'} placeholder={placeholder} style={style.inputs} />
        </View> 
    )
}

const style = StyleSheet.create({
    inputs: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 10,
        borderRadius: 6
    }
})