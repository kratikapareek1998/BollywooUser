import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Authentication/Splash';
import Login from '../screens/Authentication/Login';
import Signup from '../screens/Authentication/Signup';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import OTPVerification from '../screens/Authentication/OTPVerification';
import Profile from '../screens/Authentication/Profile';
import { BottomTab } from './tabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

function AppDrawerStack() {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerView {...props} />}>
            <DrawerStack.Screen name='BottomTab' component={BottomTab} />
        </DrawerStack.Navigator>
    )
}

function DrawerView() {
    return (
        <View>
            <Text>
                Drawer View
            </Text>
        </View>
    )
}

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name = "Splash" component={Splash} />
                <Stack.Screen name = "Login" component={Login} />
                <Stack.Screen name = "Signup" component={Signup} />
                <Stack.Screen name = "ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name = "OTPVerification" component={OTPVerification} />
                <Stack.Screen name = "Profile" component={Profile} />
                {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
                <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;