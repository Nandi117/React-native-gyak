import React from "react";
import { Text, View, StyleSheet } from "react-native";


const BoxScreen = () =>{
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
        <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
    
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        
        
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 6,
        flex: 4,

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 6,
        flex: 4,

    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 6,
        flex: 2,

    },
});

export default BoxScreen;