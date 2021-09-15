import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>Food App --- </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },
    content: {
        fontSize: 40,
    }
})


export default SplashScreen;