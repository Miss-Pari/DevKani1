// this is Pari's code 😊😁

import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

import OnBoardingItem from '../Components/OnBoardingItem';
import slides from '../slides';

export default Onboard =() =>{
    return(
        <View style={styles.container}>
            {/* <Text>Onboard</Text> */}
            <FlatList data={slides} renderItem={({ item}) => <OnBoardingItem item={item}/>} />
        </View>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});