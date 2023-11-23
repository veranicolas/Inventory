import { Image, Pressable } from "react-native"
import { AVATAR } from "../images"

type HeaderProps = {
    handleOpenDrawer: ()=> any
}

const Header = ({handleOpenDrawer}:HeaderProps) =>{

    return(
        <Pressable style={{width:55, height:55}} onPress={handleOpenDrawer}>
            <Image source={AVATAR} style={{width:60, height:60, borderRadius:100}} resizeMode="contain"/>
        </Pressable>
    )
}

export { Header }