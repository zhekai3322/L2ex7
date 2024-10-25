import { View, Text, Image } from "react-native";
import React from "react";


const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.boatContainer}>
            <Image source={picture} style={styles.boatImage} />
            <View style={styles.boatInfo}>
                <Text style={styles.boatName}>{name}</Text>
                <Text style={styles.boatDescription}>{description}</Text>
            </View>
        </View>
    );
};
export default Boat;
