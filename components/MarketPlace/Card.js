import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Card = ({ product }) => {
    const [open, setOpen] = useState(false);
    const [isLoved, setIsLoved] = useState(false);
    const [added, setAdded] = useState(false);
    return (
        <View style={styles.card}>
            <Pressable onPress={() => setOpen(!open)}>
                <ImageBackground style={styles.image} source={product.image}>
                    {open && (
                        <View>
                            <Pressable
                                onPress={() => setIsLoved(!isLoved)}
                                style={[
                                    styles.iconContainer,
                                    { marginBottom: 12 },
                                ]}
                            >
                                {isLoved ? (
                                    <AntDesign
                                        name="heart"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                ) : (
                                    <AntDesign
                                        name="hearto"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                )}
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setAdded(!added);
                                }}
                                style={styles.iconContainer}
                            >
                                {added ? (
                                    <FontAwesome
                                        name="shopping-cart"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                ) : (
                                    <AntDesign
                                        name="shoppingcart"
                                        size={14}
                                        color={Colors.green500}
                                    />
                                )}
                            </Pressable>
                        </View>
                    )}
                </ImageBackground>
            </Pressable>
            <View style={styles.cardContent}>
                <View style={styles.typeContainer}>
                    <Text style={styles.type}>{product.type}</Text>
                    <Text style={styles.quantity}>{product.quantity} ml</Text>
                </View>
                <Text style={styles.productTitle}>{product.title}</Text>
                <View style={styles.brandContainer}>
                    <View style={styles.verified}>
                        <AntDesign name="check" size={10} color="white" />
                    </View>
                    <Text style={styles.brandName}>{product.brand}</Text>
                </View>
                <View style={styles.ratingsContainer}>
                    <View style={{ flexDirection: "row", marginRight: 6 }}>
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star"
                            size={14}
                            color="#1A1A1A"
                        />
                        <FontAwesome
                            style={{ marginRight: 2 }}
                            name="star-half-full"
                            size={14}
                            color="#1A1A1A"
                        />
                    </View>
                    <Text style={styles.quantity}>{product.ratings}</Text>
                </View>
                <Text style={styles.productTitle}>${product.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get("window").width / 2 - 30,
    },
    image: {
        height: 137,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 8,
    },
    cardContent: {
        height: 164,
        borderWidth: 1,
        borderColor: "#EEEEEE",
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    type: {
        fontSize: 11,
        lineHeight: 16.5,
        fontWeight: "500",
        color: Colors.dark500,
    },
    quantity: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "500",
        color: Colors.dark600,
    },
    productTitle: {
        fontSize: 13,
        lineHeight: 19,
        fontWeight: "600",
        color: Colors.dark600,
        marginBottom: 8,
    },
    brandContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    verified: {
        width: 12,
        height: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        backgroundColor: Colors.green500,
        marginRight: 4,
    },
    brandName: {
        fontSize: 11,
        lineHeight: 16.5,
        fontWeight: "500",
        color: Colors.dark600,
    },
    ratingsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "white",
    },
});

export default Card;
