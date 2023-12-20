import {View, Text, Button} from 'react-native'

import {styles} from "./styles";
import useHome from "./useHome";

const Home = () => {

    const {lastExchange, editLastExchange, exchangeRate, getExchangeRate} = useHome()

    return (
        <View style={styles.container}>
            <Text>Your last change: {lastExchange}</Text>
            <Text>current: {exchangeRate}</Text>
            <View>
                <Button title={"Change"} onPress={() => editLastExchange(exchangeRate)}/>
                <Button title={"Refresh"} onPress={() => getExchangeRate()}/>
            </View>

        </View>
    )
}

export default Home