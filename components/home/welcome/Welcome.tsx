import React, {useEffect, useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {change} from "../../../constants/storageKey";
import {styles} from "./styles";
import {FIXER_ACCESS_KEY} from '@env'

const Welcome = () => {
    const accessKey = FIXER_ACCESS_KEY
    const [lastChange, setLastChange] = useState<string>()
    const [exchangeRate, setExchangeRate] = useState()
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem(change);
            setLastChange(value)
            const fixerResponse =
                await fetch(
                    `http://data.fixer.io/api/latest?access_key=${accessKey}&base=EUR&symbols=HUF`
                )
            const jsonRes = await fixerResponse.json()
            setExchangeRate(jsonRes.rates.HUF)

        } catch (e) {
            console.log("error $$", e)
        }
    };
    const setData = async (value: string) => {
        try {
            await AsyncStorage.setItem(change, value)
            setLastChange(value)
        } catch (e) {
            console.log("error $$", e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Your last change: {lastChange} current: {exchangeRate}</Text>
            <TextInput keyboardType={"number-pad"} onChangeText={(text) =>
                setData(text)} style={styles.input}/>
        </View>
    )
}

export default Welcome