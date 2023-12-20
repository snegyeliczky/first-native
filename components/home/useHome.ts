import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {change} from "../../constants/storageKey";
import {FIXER_ACCESS_KEY} from "@env"

const UseHome = () => {

    const accessKey = FIXER_ACCESS_KEY
    const [lastExchange, setLastExchange] = useState<string>()
    const [exchangeRate, setExchangeRate] = useState()

    const getLastExchange = async () => {
        try {
            const value = await AsyncStorage.getItem(change);
            setLastExchange(value)
        } catch (e) {
            console.log("last exchange not found: ", e)
        }
    };

    const getExchangeRate = async () => {
        try {
            const fixerResponse =
                await fetch(
                    `http://data.fixer.io/api/latest?access_key=${accessKey}&base=EUR&symbols=HUF`
                )
            const jsonRes = await fixerResponse.json()
            setExchangeRate(jsonRes.rates.HUF)
        } catch (e) {
            console.log("Don`t get exchange rate: ", e)
        }
    }

    const editLastExchange = async (value: number) => {
        try {
            await AsyncStorage.setItem(change, value.toString())
            setLastExchange(value.toString())
        } catch (e) {
            console.log("unable to store data: ", e)
        }
    }

    useEffect(() => {
        getLastExchange()
        getExchangeRate()
    }, []);

    return {
        editLastExchange,
        getExchangeRate,
        lastExchange,
        exchangeRate,
    };
};

export default UseHome;