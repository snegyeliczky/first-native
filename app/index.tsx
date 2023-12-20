import {SafeAreaView, ScrollView, View} from 'react-native'
import {Stack} from "expo-router";
import {COLORS, icons, images, SIZES} from "../constants";
import {ScreenHeaderBtn, Home} from "../components";

const Index = () => {

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