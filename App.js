import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'




export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Campo minado</Text>
        <Text style={styles.instructions}> Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        <Field flagged opened/>
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field/>
        <Field opened nearMines={2}/>
        <Field/>
        <Field opened nearMines={5}/>
        <Field opened nearMines={7}/>
        <Field flagged/>
        <Field mined/>
        <Field mined opened/>
        <Field mined opened exploded/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
