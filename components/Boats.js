import { View, Text, Image } from "react-native";
import React from "react";

const Boats = ({ name, description, picture }) => {
    return (
        <View>
            <Image source={picture} style={{width:400, height:500}} />
            <View>
                <Text>
                    {name}
                </Text>
                <Text>
                    {description}
                </Text>
            </View>
        </View>
    );
};


export default Boats;
