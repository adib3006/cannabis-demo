import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import SearchBar from "../components/DashBoard/SearchBar";
import Categories from "../components/MarketPlace/Categories";
import { StatusBar } from "react-native";
import FeatureProducts from "../components/MarketPlace/FeatureProducts";

const MarketPlace = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContainer}
            >
                <Text style={styles.title}>Marketplace</Text>
                <SearchBar style={{ marginTop: 16 }} />
                <Categories />
                <FeatureProducts />
            </ScrollView>
            <StatusBar barStyle={"default"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "white",
        //marginTop: StatusBar.currentHeight,
    },
    scrollViewContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.dark600,
        fontWeight: "500",
        textAlign: "center",
    },
});

export default MarketPlace;
