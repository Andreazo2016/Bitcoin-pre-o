import React, { useEffect } from 'react';
import { View, StyleSheet, Easing, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import Bitcoin from '../../assets/bitcoin.json';


const BitcoinAnimation = ({ stopAnimation }) => {

    const progress = new Animated.Value(0)

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            stopAnimation()
        })
    }, [])

    
    return <View
                style={styles.container}
        >
        <LottieView
            source={Bitcoin}
            autoPlay
            loop={false}
            progress={progress}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default BitcoinAnimation;