import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter } from './componentes/Multi'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto="Flexível"/>
                <ParImpar numero={32} />
                <Inverter texto="React Native" />
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})