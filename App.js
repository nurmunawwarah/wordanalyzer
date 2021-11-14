import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View,Alert} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      word: '',
      countAlph: 0,
      countVow: 0,
      countCons: 0,      
    }
  }

  countVowel = (str) =>{ 
    let count = str.match(/[aeiou]/gi);
    return count === null ? 0 : count.length;
  }

  countConsonant = (str) =>{
    let count = this.state.word.replace(/ /g, "").length - this.countVowel(str);
    return count === null ? 0 : count;
  }

  analyze = () =>{
    this.setState({countAlph: this.state.word.replace(/ /g, "").length});
    this.setState({countVow: this.countVowel(this.state.word)});
    this.setState({countCons: this.countConsonant(this.state.word)});
  }
  
  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.header}>A Word Analyzer</Text>

        <View style={styles.box}>
          <TextInput style={styles.input}onChangeText={(word) => this.setState({word})} placeholder='Put text here'></TextInput>
          <Button onPress={this.analyze}title="Analyze"></Button>
          <View style={styles.result}>
            <Text style={styles.text}>Word: {this.state.word}</Text>
            <Text style={styles.text}>No of Consonants: {this.state.countCons}</Text>
            <Text style={styles.text}>No of Vowels: {this.state.countVow}</Text>
            <Text style={styles.text}>No of Characters: {this.state.countAlph}</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D8BFD8',
  },
  header:{
    marginTop: 60,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight: 'bold'
  },
  text:{
    fontSize: 15,
    color: '#000'
  },
  input:{
    borderWidth: 2,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 45,
    paddingRight: 45,
    marginBottom: 10
  },
  box:{
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  result:{
    margin:20,
    fontSize: 15,
    color: '#000'
  }
 
});