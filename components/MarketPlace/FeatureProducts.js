import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Card from "./Card";

const FeatureProducts = () => {
    const data = [
        {
            image: require("../../assets/items/vape.png"),
            type: "CARTRIDGE",
            quantity: 5,
            title: "Bloom Classic Vape | Pineapple Express",
            brand: "BLOOM BRAND",
            ratings: "4.6 (81)",
            price: 25.0,
        },
        {
            image: require("../../assets/items/kaviarFlower.png"),
            type: "Flower",
            quantity: 24,
            title: "KAVIAR MOONROCKS",
            brand: "Kaviar",
            ratings: "4.6 (81)",
            price: 25.0,
        },
    ];

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.sectionTitle}>Feature Products</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.viewAll}>View all</Text>
                    <AntDesign
                        name="arrowright"
                        size={16}
                        color={Colors.dark600}
                    />
                </View>
            </View>
            <View style={styles.container}>
                {/* card started */}
                {data.map((d, index) => (
                    <Card key={index} product={d} />
                ))}
                {/* card ended */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.dark600,
    },
    viewAll: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "400",
        color: Colors.dark600,
        marginRight: 5,
    },
});

export default FeatureProducts;
