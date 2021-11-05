import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import styles from "./styles";
import MegaNumero from "../numero/Numero";

export class Mega extends React.Component {
  state = {
    qtdDeNumeros: this.props.qtdDeNumeros,
    numeros: [],
  };

  alterarQtdNumero = (qtd) => {
    this.setState({ qtdDeNumeros: +qtd });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumerosV1 = () => {
    const numeros = Array(this.state.qtdDeNumeros)
      .fill()
      .reduce((nums) => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  gerarNumerosV2 = () => {
    const { qtdDeNumeros } = this.state;
    const numeros = [];

    for (let i = 0; i < qtdDeNumeros; i++) {
      numeros.push(this.gerarNumeroNaoContido(numeros));
    }

    numeros.sort((a, b) => a - b);

    this.setState({ numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <MegaNumero num={num}></MegaNumero>;
    });
  };

  render() {
    return (
      <>
        <Text style={styles.fonteGrande}>Gerador de mega-sena</Text>
        <TextInput
          keyboardType={"numeric"}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtd de Números"
          value={`${this.state.qtdDeNumeros}`}
          onChangeText={this.alterarQtdNumero}
        />
        <Button title="gerar" onPress={this.gerarNumerosV1} />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          key={(item, index) => this.state.numeros[index]}
        >
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
