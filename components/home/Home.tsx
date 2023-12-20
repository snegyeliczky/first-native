import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {change} from "../../constants/storageKey";
import {styles} from "./styles";
import {FIXER_ACCESS_KEY} from '@env'
import useHome from "./useHome";

const Home = () => {

    const {lastExchange, editLastExchange, exchangeRate} = useHome()


    return (
        <View style={styles.container}>
            <Text>Your last change: {lastExchange}</Text>
            <Text>current: {exchangeRate}</Text>
            <Button title={"Change"} onPress={() => editLastExchange(exchangeRate)}/>
        </View>
    )
}

export default Home