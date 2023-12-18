import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {change} from "../../../constants/storageKey";
import {styles} from "./styles";


const Welcome = () => {

    const [lastChange, setLastChange] = useState<string>()

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem(change);
            setLastChange(value)
            return value
        } catch (e) {
            console.log(e)
        }
    };
    const setData = async (value: string) => {
        try {
            await AsyncStorage.setItem(change, value)
            setLastChange(value)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Your last change: {lastChange}</Text>
            <TextInput keyboardType={"number-pad"} onChangeText={(text) =>
                setData(text)} style={styles.input}/>
        </View>
    )
}

export default Welcome