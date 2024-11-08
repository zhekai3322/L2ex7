// import { View, Text, Image } from "react-native";
// import React from "react";
//
// const Boats = ({ name, description, picture }) => {
//     return (
//         <View>
//             <Image source={picture} style={{width:400, height:500}} />
//             <View>
//                 <Text>
//                     {name}
//                 </Text>
//                 <Text>
//                     {description}
//                 </Text>
//             </View>
//         </View>
//     );
// };
//
//
// export default Boats;

//L04 Ex5
import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Boats = ({ name, description, picture }) => {
    return (
        <View style={styles.container}>
            <Image source={picture} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.boatName}>{name}</Text>
                <Text style={styles.boatDescription}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 300,
    },
    textContainer: {
        padding: 15,
    },
    boatName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    boatDescription: {
        fontSize: 16,
        color: '#555',
    },
});

export default Boats;
