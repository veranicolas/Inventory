import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Login } from "../views";
import { Inventory } from "../views/Inventory";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeNavigator = () =>{

    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Drawer.Screen name="Inventario" component={Inventory} options={{headerShown:false}} />
        </Drawer.Navigator>
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