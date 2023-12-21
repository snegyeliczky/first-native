import {SafeAreaView, ScrollView, View} from 'react-native'
import {Stack} from "expo-router";
import {COLORS, icons, images, SIZES} from "../constants";
import {ScreenHeaderBtn, Home} from "../components";
import registerNNPushToken, {registerIndieID} from 'native-notify';
import {useEffect} from "react";

const Index = () => {
    registerNNPushToken(17009, 'r5NfuRJ9LQdYHOcFug0WFP');

    const subscribeForNoties = () => {
        registerIndieID('1', 17009, 'r5NfuRJ9LQdYHOcFug0WFP');
    }

    useEffect(() => {
        subscribeForNoties()
    }, []);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn dimension={"60%"} iconUrl={icons.menu} handlePress={() => {
                    }}/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn dimension={"100%"} iconUrl={images.profile} handlePress={() => {
                    }}/>
                ),
                headerTitle: "Bubek"
            }
            }/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Home/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index