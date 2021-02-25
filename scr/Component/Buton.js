import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

export default function Buton(props) {
    const {text,style,textStyle} = props 
    return (
        <View>
            <TouchableOpacity style={styles.button,style}>
                <Text style={textStyle}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:10
    }
})

