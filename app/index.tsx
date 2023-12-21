import {SafeAreaView, ScrollView, View} from 'react-native'
import {Stack} from "expo-router";
import {COLORS, icons, SIZES} from "../constants";
import {ScreenHeaderBtn, Home} from "../components";
import registerNNPushToken, {registerIndieID} from 'native-notify';
import {useEffect} from "react";
import Constants from "expo-constants"
import {ClerkProvider} from "@clerk/clerk-expo";
import User from "../components/common/header/User";

const Index = () => {
    registerNNPushToken(17009, 'r5NfuRJ9LQdYHOcFug0WFP');
    const subscribeForNoties = async () => {
        await registerIndieID('1', 17009, 'r5NfuRJ9LQdYHOcFug0WFP');
    }

    useEffect(() => {
        subscribeForNoties()
    }, []);

    return (
        <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
                <Stack.Screen options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn dimension={"60%"} iconUrl={icons.menu} handlePress={() => {
                        }}/>
                    ),
                    headerTitle: "Bubek"
                }
                }/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1, padding: SIZES.medium}}>
                        <User/>
                        <Home/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ClerkProvider>
    )
}

export default Index