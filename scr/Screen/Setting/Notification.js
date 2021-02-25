import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import Input from '../../Component/Input'
import { WSize, HSize } from '../../Helper/Hepler'
import Buton from '../../Component/Buton'

export default function Notification() {

    const [Old, setOld] = useState('')
    const [New, setNew] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>
            <View>
                <Text >
                    Notification
                </Text>
                <View style={styles.box}>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                        <Text style={styles.notificationtxt}>
                            Push Notification
                </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>

            </View>
            <Text>
                Change Password
            </Text>
            <View style={styles.box}>
                <Marker text='Old Password' />
                <Input
                    placeholder="Enter Old Password"
                    onChange={setOld}
                    value={Old}
                />
                <Marker text='New Password' />
                <Input
                    placeholder="Enter new Password"
                    onChange={setNew}
                    value={New}
                />
                <Marker text='Confirm New Password' />
                <Input
                    placeholder="Enter Confirm Password"
                    onChange={setConfirm}
                    value={Confirm}
                />
                <Buton text='Update' textStyle={{ color: 'white' }} style={styles.updatebutton} />
            </View>
        </View>
    )
}

const Marker = ({ text }) => {
    return (
        <Text style={{ marginLeft: WSize(15), marginBottom: HSize(8) }}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15 + 7.5
    },
    box: {
        borderWidth: 1,
        padding: WSize(5),
        marginTop: HSize(10),
        marginBottom: HSize(10),
    },
    notificationtxt: {
        fontFamily: 'Arial',
        fontWeight: '700',
        fontSize: 20,

    },
    updatebutton: {
        height: HSize(20),
        backgroundColor: 'lightblue',
        padding: WSize(15),
        justifyContent: 'center',
        alignItems: 'center',
        width: WSize(100),
        alignSelf: 'center',
        margin: HSize(5),
        borderRadius: 10,
        marginTop: HSize(20)
    }
})
