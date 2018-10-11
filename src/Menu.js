import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'

export default createDrawerNavigator({
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador numeroInicial={100} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 })