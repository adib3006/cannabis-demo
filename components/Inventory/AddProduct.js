import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";

const AddProduct = () => {
    const [format, setFormat] = useState(null);
    const formats = ["lb", "gm"];
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Your Product</Text>
            <Text style={styles.descriptionText}>
                You can add your new product for publish in your Product list as
                well as save as draft for further editing.
            </Text>
            <View style={styles.bottomSection}>
                <View style={{ flexDirection: "row" }}>
                    {formats.map((f) => (
                        <View key={f} style={styles.radioRow}>
                            <Pressable
                                onPress={() => setFormat(f)}
                                style={[
                                    styles.outer,
                                    {
                                        borderColor: `${
                                            f === format
                                                ? Colors.green500
                                                : Colors.dark400
                                        }`,
                                    },
                                ]}
                            >
                                {f === format && <View style={styles.inner} />}
                            </Pressable>
                            <Text style={styles.radioText}>{f}</Text>
                        </View>
                    ))}
                </View>
                <Pressable style={styles.btn}>
                    <Entypo name="plus" size={18} color="white" />
                    <Text style={styles.btnText}>Add New</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 14,
        marginBottom: 20,
        borderRadius: 6,
    },
    titleText: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "600",
        color: Colors.dark600,
        marginBottom: 3,
    },
    descriptionText: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color: Colors.dark500,
        marginBottom: 20,
    },
    btn: {
        marginHorizontal: 11,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: Colors.green500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    btnText: {
        color: "white",
        lineHeight: 21,
        fontSize: 14,
        fontWeight: "600",
        marginLeft: 6,
    },
    radioText: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: "500",
        color: Colors.dark600,
    },
    inner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.green500,
    },
    outer: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
    },
    radioRow: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 14,
    },
    bottomSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default AddProduct;
