import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import styles from "./styles";

export class Mega extends React.Component {
  state = {
    qtdDeNumeros: this.props.qtdDeNumeros,
  };

  alterarQtdNumero(qtd) {
    this.setState({ qtdDeNumeros: qtd });
  }

  render() {
    return (
      <>
        <Text style={styles.fonteGrande}>
          Gerador de mega-sena {this.state.qtdDeNumeros}
        </Text>
        <TextInput
          keyboardType={"numeric"}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtd de Números"
          value={this.state.qtdDeNumeros}
          onChangeText={(qtd) => this.alterarQtdNumero(qtd)}
        />
      </>
    );
  }
}
