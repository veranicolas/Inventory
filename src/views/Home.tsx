import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { Header } from "@/components";

type HomeProps = DrawerScreenProps<any, 'Home'>

const Home = ({navigation}:HomeProps) =>{

    const handleOpenDrawer = () =>{
        navigation.openDrawer()
    }

    return(
        <View style={style.container}>
            <Header handleOpenDrawer={handleOpenDrawer}/>
            <View style={style.current_stats}>
                <Text style={{textAlign:'center'}}>Esta es la home</Text>
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
    current_stats: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '98%',
        height: 300,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export { Home }