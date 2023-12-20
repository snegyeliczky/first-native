import {View, Text, Button} from 'react-native'

import {profitStyle, styles} from "./styles";
import useHome from "./useHome";

const Home = () => {

    const {lastExchange, editLastExchange, exchangeRate, getExchangeRate} = useHome()
    const profit = Number(exchangeRate) - Number(lastExchange)

    return (
        <View style={styles.container}>
            <Text style={profitStyle(profit)}>{profit}</Text>
            <Text>Your last change: {lastExchange}</Text>
            <Text>current: {exchangeRate}</Text>
            <View style={styles.buttonContainer}>
                <Button title={"Change"} onPress={() => editLastExchange(exchangeRate)}/>
                <Button title={"Refresh"} onPress={() => getExchangeRate()}/>
            </View>

        </View>
    )
}

export default Home