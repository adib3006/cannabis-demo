import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import AddProduct from "../components/Inventory/AddProduct";
import InfoCards from "../components/Inventory/InfoCards";
import ProductsandBundleTable from "../components/Inventory/ProductsandBundleTable";

const Inventory = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <Text style={styles.titleText}>Inventory</Text>
                <AddProduct />
                <InfoCards />
                <ProductsandBundleTable />
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
        //marginTop: StatusBar.currentHeight,
    },
    titleText: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: Colors.dark600,
        marginBottom: 17,
    },
});

export default Inventory;
