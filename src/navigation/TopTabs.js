import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chats, Contacts } from '../screens';

const Tab = createMaterialTopTabNavigator();

export default TopTabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: '#009DFF',
                },
                activeTintColor: '#009DFF',
                inactiveTintColor: '#000000',
            }}
        >
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Contacts" component={Contacts} />
        </Tab.Navigator>
    )
}