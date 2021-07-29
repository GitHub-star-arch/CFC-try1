import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AppTabNavigator } from './AppTabNavigator'
import SettingScreen from '../Screens/Settings'
import CustomSideBarMenu from './CustomSideBarMenu'
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from 'react-navigation-drawer'

export const AppDrawerNavigator = createDrawerNavigator(
    {
        Settings: {
            screen: SettingScreen,
            //navigationOptions: { drawerIcon: <Icon name='setting' type='ant-design' size={28} color={'purple'} /> }
        },
        Home: {
            screen: AppTabNavigator,
            //navigationOptions: { drawerIcon: <Icon name="home" type="font-awesome" color="#ccffff" /> }
        },
       
    },
    {
        contentComponent:CustomSideBarMenu
      },
      {
        initialRouteName : 'Settings'
    })