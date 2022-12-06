import {Text, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './style';

export default function Form(){
    return ( 
    <View>
        <Text style={styles.label}>Login</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.input} />

        <Button title={'Login'} titleStyle={{fontSize: 28, fontWeight: 'bold'}}  buttonStyle={styles.buttonLog}/>

        <Button title={'Cadastre-se'}  titleStyle={{fontSize: 28, fontWeight: 'bold'}} buttonStyle={styles.buttonCad} />
    </View>
    );
}