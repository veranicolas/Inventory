import { Pressable, StyleSheet, Text } from "react-native"

type ButtonProps = {
    title:string,
    onPress:()=> any
}

export const CustomButton = ({title, onPress}:ButtonProps) =>{
    return(
        <Pressable style={style.button} android_ripple={{color:'white'}} onPress={onPress}>
            <Text style={style.buttonText}>{title.toUpperCase()}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {width:'100%', backgroundColor:'#5AE4A7', paddingVertical:15, borderRadius:6},
    buttonText: {fontSize:20, textAlign:'center', color:'black', fontWeight:'bold'},
})