import React from 'react';

import {
    Text,
    View,
    Button
} from 'react-native';

const Eliminar = (props) =>{

    const {
        nombre,
        eventoEliminar
    } = props

    return(
        <View>
            <Text>
                nombre: {nombre}
            </Text>

            <Button
                title = 'Eliminar'
                color = 'green'
                onPress  = {eventoEliminar}
            />
        </View>
    );
}

export default Eliminar;