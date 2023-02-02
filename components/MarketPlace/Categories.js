import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Pressable,
    Alert,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Categories = () => {
    const data = [
        {
            name: "Vape Pen",
            image: require("../../assets/categories/cat1.png"),
        },
        { name: "Flower", image: require("../../assets/categories/cat2.png") },
        {
            name: "Concentrates",
            image: require("../../assets/categories/cat3.png"),
        },
        {
            name: "Vape Pen",
            image: require("../../assets/categories/cat1.png"),
        },
        { name: "Flower", image: require("../../assets/categories/cat2.png") },
        {
            name: "Concentrates",
            image: require("../../assets/categories/cat3.png"),
        },
    ];

    const handlePress = (data) => {
        Alert.alert(`Pressed ${data.name} category`);
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.title}>Explore Popular Categories</Text>
            <ScrollView horizontal={true}>
                {data.map((d, index) => (
                    <Pressable
                        onPress={() => handlePress(d)}
                        key={index}
                        style={
                            index === data.length - 1
                                ? { ...styles.categoryCard, marginRight: 0 }
                                : styles.categoryCard
                        }
                    >
                        <Image style={styles.categoryImage} source={d.image} />
                        <Text>{d.name}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.dark600,
    },
    categoryCard: {
        marginTop: 14,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginBottom: 12,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        color: Colors.dark600,
    },
});

export default Categories;
