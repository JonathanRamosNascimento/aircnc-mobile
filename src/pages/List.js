import React, { useState, useEffect } from 'react';
import { View ,SafeAreaView, Text, StyleSheet, Image, AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    // Estou usando o View e não o SafeAreaView por que meu emulador é android e não adaptou com o Safe
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 70
    }
})