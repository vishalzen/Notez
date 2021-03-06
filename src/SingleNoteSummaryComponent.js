import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SingleNoteSummaryComponent = (props) => {
    console.log(props)
    return <View  style={styles.textViewStyle}>
    {/*<View  backgroundColor={randomBackground()} style={styles.textViewStyle}> */}
        <Text> {props.myNoteDate.substring(0, 11)} </Text>
        <Text style={styles.textProperties}> {props.myNoteText}</Text>
    </View>
}

const randomBackground = () => {
    var red = Math.floor(Math.random() * 255) // 123
    var green = Math.floor(Math.random() * 255) // 45
    var blue = Math.floor(Math.random() * 255) // 43

    // String Interpolation
    // In a string -> isnert a value of some other data type
    // ""  ''  ``

    return `rgb(${red}, ${green}, ${blue})` // rgb(123, 45, 43)
}

const styles = StyleSheet.create({
    textProperties: {
        fontSize: 24
    },
    textViewStyle: {
        height: 150,
        width: 220,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        backgroundColor : '#92a8d1',
       // alignItems: "center",
        //justifyContent: "center"
    }
});


export default SingleNoteSummaryComponent;