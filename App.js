// import React from 'react';
// import {View, ScrollView} from 'react-native';
// import Boats from './components/Boats';
//
//
// const AllBoats = () => {
//     return (
//         <ScrollView>
//             <Boats
//                 name= 'Princess V48'
//                 description= 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
//                 picture= {require('./img/princess.jpg')}
//             />
//             <Boats
//                 name= 'Bayliner 175 Bowrider'
//                 description= 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
//                 picture= {require('./img/bayliner.jpg')}
//             />
//         </ScrollView>
//     );
// };
//
//
//
// const App = () => {
//     return (
//         <View style={{ flex: 1, padding: 20 }}>
//             <AllBoats />
//         </View>
//     );
// };
//
// export default App;

//L04 Ex5
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Boats from './components/Boats';

const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Boats
                name='Sea Ray 500 Sundancer'
                description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                picture={require('./img/sea_ray.jpg')}
            />
            <Boats
                name='Four Winns Horizon 180'
                description='A sporty look and refined details truly set the Horizon 180 above all others.'
                picture={require('./img/four_winns.jpg')}
            />
            <Boats
                name='Flipper 640 ST'
                description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                picture={require('./img/flipper.jpg')}
            />
            <Boats
                name='Princess V48'
                description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                picture={require('./img/princess.jpg')}
            />
            <Boats
                name='Bayliner 175 Bowrider'
                description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                picture={require('./img/bayliner.jpg')}
            />
            <Boats
                name='Fairline Targa 47'
                description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                picture={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <AllBoats />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#e6c066',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
});

export default App;
