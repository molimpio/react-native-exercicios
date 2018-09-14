import React, { Component } from 'react'
import { View ,Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0
    }

    /** Como está usando arrow function na função o this não muda */
    maisUm = () => this.setState({ numero: this.state.numero + 1 })    

    /** Usando arrow function no Component que chamou a função */
    limpar() {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={() => this.limpar()}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}