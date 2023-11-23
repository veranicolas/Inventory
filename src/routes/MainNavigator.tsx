import { createStackNavigator } from "@react-navigation/stack";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { AddItem, Home, Inventory, Login } from "@/views";

import { Image, Text, View } from "react-native";
import { AVATAR } from "@/images";

const Stack = createStackNavigator()
const InventoryNav = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeNavigator = () =>{

    return(
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
            return (
              <DrawerContentScrollView contentContainerStyle={{display:'flex', flex:1, flexDirection:'column', justifyContent:'flex-start'}} {...props}>

                {/* picture and name */}
                <View style={{paddingVertical:25, display:'flex', justifyContent:'center', flexDirection:'row'}}>
                    <Image source={AVATAR} style={{width:140, height:140, borderRadius:100}} resizeMode="contain" />
                </View>
                <Text style={{fontSize:25, textAlign:'center', paddingVertical:10, marginBottom:15}}>Nicolas</Text>

                {/* list with routes */}
                <DrawerItemList {...props} />

                {/* logout button */}
                <View style={{flex:1, display:'flex', justifyContent:'flex-end'}}>
                    <DrawerItem style={{backgroundColor:'red'}} label="LOGOUT" labelStyle={{color:'white', textAlign:'center', width:'100%'}} onPress={() => props.navigation.navigate("Login")} />
                </View>
                
              </DrawerContentScrollView>
            )
          }}>
            <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Drawer.Screen name="Inventario" component={InventoryNavigator} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}

const InventoryNavigator = () =>{
    return(
        <InventoryNav.Navigator initialRouteName="InventarioMain">
            <InventoryNav.Screen name="InventarioMain" component={Inventory} options={{headerShown:false}}/>
            <InventoryNav.Screen name="Cargar Item" component={AddItem} />
        </InventoryNav.Navigator>
    )
}

export const MainNavigator = () =>{

    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Main" component={HomeNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}