import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";


export default function LoginScreen() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    return (
        <View>
            <Text>Faça seu Login</Text>
            <TextInput
                placeholder="Digite Seu Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput

                placeholder="Digite Sua Senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry //  Faz com que o campo da senha esteja oculto com *
            />

        <Button onPress={() => realizaLogin}>Fazer Login</Button>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
        Faça Seu Cadastro</Button>
        </View>
    );
}