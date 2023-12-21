import React from 'react';
import {SignedIn, SignedOut} from "@clerk/clerk-expo";
import {Text, View} from "react-native";
import SignInWithOAuth from "../../SignInWithOAuth";

const User = () => {
    return (
        <View>
            <SignedIn><Text>Sign in</Text></SignedIn>
            <SignedOut><SignInWithOAuth/></SignedOut>
        </View>
    );
};

export default User;