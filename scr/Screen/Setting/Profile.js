import React,{useState} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Input, Buton } from '../../Component'
import { WSize, HSize } from '../../Helper/Hepler'
import {profile} from '../../Helper/Images'

export default function Profile() {
    const [name,setName] = useState('')
    const [email,setemail] = useState('')
    const [number,setnumber] = useState('')

    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.profile}/>
            <Buton text="Upload Profile" textStyle={styles.uploadtext} style={styles.uploadbutton} />
            <Marker text="Name" style={styles.markertext}/>
            <Input
                placeholder="Enter Your Name"
                onChange={setName}
                value={name}
            />
            <Marker text="Email" style={styles.markertext}/>
            <Input
                placeholder="Enter Your Email"
                onChange={setemail}
                value={email}
            />
            <Marker text="Mobile" style={styles.markertext}/>
            <Input
                placeholder="Enter Your Mobile"
                onChange={setnumber}
                value={number}
            />
            <Marker text="Plan: Free" style={styles.markertext}/>
            <Buton text="Update" textStyle={styles.uploadtext} style={styles.updatebutton} />
        </View>
    )
}

const Marker = ({ text ,style}) => {
    return (
        <Text style={[{ marginLeft: WSize(15), marginBottom: HSize(5),marginTop:HSize(5)},style]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:WSize(10),
    },
    uploadbutton: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        height: HSize(40),
        justifyContent: 'center',
        width: WSize(120),
        borderRadius:10,
        alignSelf:'center',
        margin:10
    },
    uploadtext: {
        fontFamily: 'Arial',
        color: 'white',
        fontWeight: 'bold',
    },
    markertext:{
        fontFamily:'Arial',
        fontWeight:'bold',
        fontSize:20
    },
    updatebutton:{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        height: HSize(40),
        justifyContent: 'center',
        width: WSize(100),
        borderRadius:10,
        alignSelf:'center',
        margin:10   
    },
    profile:{
        height:HSize(100),
        width:WSize(100),
        alignSelf:'center',
        borderRadius:70,
        margin:10,
        marginTop:20
    }
})