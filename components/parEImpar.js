import { use, useState } from 'react'
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native'

export default function ParEImpar(){
    const [Num1, setNum1] = useState()
    const [Res, setRes] = useState()

    function isPar(props){
        if (+Num1 % 2 == 0){
            setRes('Par')
        }
        else{
            setRes('Impar')
    }
    }

    return(
        <View style={styles.parContainer}>
            <View>
                <Text>Impar ou Par</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='numero' value={Num1} onChangeText={setNum1}></TextInput>

            </View>

            <View style={styles.botaoStyle}>
                <View>
                    <Pressable style={styles.botao} onPress={isPar}>
                        <Text>Verificar</Text>
                    </Pressable>
                </View>

            </View>


            <View style={styles.textoContainer}>
                <Text style={styles.texto}>
                    Resultado: {Res}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    parContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6664',
        width: '100%'
    },
    botao: {
        width: '80',
        height: 50,
        backgroundColor: '#7db4b5',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: ''
    },
    input: {
        backgroundColor: 'white',
        height: '40',
        width: '80',
        alignItems: 'center'
    },
    botaoStyle:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    inputContainer:{

        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    texto: {
        fontWeight: 'bold',
    },
    textoContainer: {
        marginTop:15
    }
})