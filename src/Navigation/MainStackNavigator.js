import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SignInScreen from '../screen/SignInScreen'
import GroupScreen from '../screen/Groupscreen'
import AddgroupScreen from '../screen/AddgroupScreen'
import ChatScreen from '../screen/ChatScreen'

const Stack = createStackNavigator()

function Chatflow() {
    return (
        <NavigationContainer>
            <Stack.Navigator name="chat">
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{headerShown : false }}
                />
                <Stack.Screen
                    name="Groups Screen"
                    component={GroupScreen}
                    options={{title : "Groups"}}
                />
                <Stack.Screen
                    name="Add Group Screen"
                    component={AddgroupScreen}
                    options={{title : "Add Group"}}
                />
                <Stack.Screen
                    name="Chat Screen"
                    component={ChatScreen}
                    options={{title : "Add C"}}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

function MainStackNavigator() {
    return (
        Chatflow()
    )
}

export default MainStackNavigator