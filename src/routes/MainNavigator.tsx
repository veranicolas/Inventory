import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login } from "../views";

const Stack = createStackNavigator()

export const MainNavigator = () =>{

    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}