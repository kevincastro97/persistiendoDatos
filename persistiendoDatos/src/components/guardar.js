import React from 'react';

import {
    TextInput,
    Text,
    View,
    Button
} from 'react-native';

const Guardar = (props) =>{

    const {
        nombre,
        eventoNombre,
        eventoGuardar
    } = props

    return(
        <View>
            <Text>
                Añadir un alumno
            </Text>

            <TextInput
                onChangeText = {eventoNombre}
                value = {nombre}
            />

            <Button
                title = 'Añadir'
                color = 'green'
                onPress  = {eventoGuardar}
            />
        </View>
    );
}

export default Guardar;