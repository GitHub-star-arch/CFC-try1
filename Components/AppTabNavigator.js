import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonorScreen from '../Screens/Donor';
import DonateScreen from '../Screens/Donate';
import { Icon } from 'react-native-elements';
import SettingScreen from '../Screens/Settings';

export const AppTabNavigator = createBottomTabNavigator({
    Donors: {
        screen: DonorScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='hands-helping' type='FontAwesome5' />),
            tabBarLabel: "Our Wonderful Donors"
        }
    },
    Settings:{
        screen: SettingScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='setting' type='AntDesign' />),
            tabBarLabel: "Changing Info"
        }
    },
    Donate: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarIcon: (<Icon name='charity' type='MaterialCommunityIcons' />),
            tabBarLabel: "One Of Us"
        }
    },
})