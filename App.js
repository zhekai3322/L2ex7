import React from 'react';
import {View, ScrollView} from 'react-native';
import Boats from './components/Boats';


const AllBoats = () => {
    return (
        <ScrollView>
            <Boats
                name= 'Princess V48'
                description= 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                picture= {require('./img/princess.jpg')}
            />
            <Boats
                name= 'Bayliner 175 Bowrider'
                description= 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                picture= {require('./img/bayliner.jpg')}
            />
        </ScrollView>
    );
};



const App = () => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <AllBoats />
        </View>
    );
};

export default App;
