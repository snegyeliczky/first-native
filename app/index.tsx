import {SafeAreaView, ScrollView, View} from 'react-native'
import {Stack, useRouter} from "expo-router";
import {COLORS, SIZES} from "../constants";
import {ScreenHeaderBtn, Welcome} from "../components";


const Home = () => {

    const router = useRouter()
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn/>
                ),
                headerTitle: "Bubek"
            }
            }/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home