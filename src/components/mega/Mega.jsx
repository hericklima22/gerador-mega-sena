import React, { Component } from "react";
import { Button, Text, TextInput } from "react-native";
import styles from "./styles";

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
        <Button title="gerar" onPress={this.gerarNumerosV2} />
        <Text>{this.state.numeros.join(",")}</Text>
      </>
    );
  }
}
