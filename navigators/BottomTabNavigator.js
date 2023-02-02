import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InventoryScreen from "../screens/InventoryScreen";
import MarketPlaceScreen from "../screens/MarketPlaceScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import Dashbaord from "../screens/DashBoard";
import Inventory from "../screens/Inventory";
import MarketPlace from "../screens/MarketPlace";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarLabel: navigation.isFocused() ? route.name : "",
                    headerShown: false,
                    tabBarStyle: {
                        height: 75,
                        paddingVertical: 14,
                    },
                    tabBarLabelStyle: {
                        color: "#4CAF50",
                        fontSize: 12,
                        lineHeight: 18,
                        fontWeight: "500",
                        marginBottom: 14,
                    },
                    tabBarItemStyle: {},
                };
            }}
        >
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="home"
                                    size={24}
                                    color="#4CAF50"
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    name="home-outline"
                                    size={24}
                                    color="#8D8D97"
                                />
                            );
                        }
                    },
                }}
                name="Home"
                component={Dashbaord}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <MaterialIcons
                                    name="inventory"
                                    size={24}
                                    color="#4CAF50"
                                />
                            );
                        } else {
                            return (
                                <MaterialIcons
                                    name="inventory"
                                    size={24}
                                    color="#8D8D97"
                                />
                            );
                        }
                    },
                }}
                name="Inventory"
                component={Inventory}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Entypo name="shop" size={24} color="#4CAF50" />
                            );
                        } else {
                            return (
                                <Entypo name="shop" size={24} color="#8D8D97" />
                            );
                        }
                    },
                }}
                name="Market Place"
                component={MarketPlace}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="settings"
                                    size={24}
                                    color="#4CAF50"
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    name="settings-outline"
                                    size={24}
                                    color="#8D8D97"
                                />
                            );
                        }
                    },
                }}
                name="Settings"
                component={SettingsScreen}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
