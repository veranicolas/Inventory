import { StyleSheet, Text, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

type AddItemProps = DrawerScreenProps<any, 'Cargar Item'>

const AddItem = ({navigation}:AddItemProps) =>{

    return(
        <View style={style.container}>
            <View style={style.title}>
                <Text style={{textAlign:'left', fontSize:40, color:'black'}}></Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start', 
        flexDirection: 'column', 
        flex: 1, 
        paddingHorizontal: 15, 
        paddingVertical:40,
        backgroundColor: 'white', 
        gap: 25,
    },
    title: {
        width: '98%',
        height: 60,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export { AddItem }