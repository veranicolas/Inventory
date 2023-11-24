import { Controller, Control } from "react-hook-form"
import { TextInput, StyleSheet, Text, View, KeyboardTypeOptions} from "react-native"

type TextInputProps = {
    placeholder:string,
    secureTextEntry?:boolean,
    control: any
    name:string,
    valueType?:KeyboardTypeOptions
}

export const CustomInput = ({placeholder, secureTextEntry = false, control, name, valueType = 'default'}:TextInputProps) =>{
    return(
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={style.inputs}
                        keyboardType={valueType}
                    />
                )}
                name={name}
            />
        </View> 
    )
}

const style = StyleSheet.create({
    inputs: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 10,
        borderRadius: 6,
        width:'100%'
    }
})