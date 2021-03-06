import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';


export default class q1 extends React.Component {

    constructor(props){
    super(props)

    this.state = {
      answered : 0,
      res : 'Unanswered'
    }
  }

  clickA = () => {
  if(this.state.answered==0)
    this.setState({
      answered : 1,
      res :'You are Wrong. Correct Answer is A'
    })
  }

  clickB = () => {
    if(this.state.answered==0)
    this.setState({
      answered : 1,
      res :'You are Correct.'
    })
  }

  clickC = () => {
    if(this.state.answered==0)
    this.setState({
      answered : 1,
      res :'You are Wrong. Correct Answer is A'
    })
  }

  clickD = () => {
  if(this.state.answered==0)
    this.setState({
      answered : 1,
      res :'You are Wrong. Correct Answer is A'
    })
  }

  render() {

    return (
      <View style={styles.panel}>
        <Text style={styles.greetingBox}>Where did the British first open their factories in India?</Text>
         <VrButton style={styles.greetingBox} onClick = { this.clickA} >
              <Text style={styles.greeting}>Assam</Text>
          </VrButton>
          <VrButton id='B' style={ styles.greetingBox } 
            onClick = {this.clickB} >
              <Text style={styles.greeting}>Orissa</Text>
          </VrButton>
          <VrButton style={styles.greetingBox} onClick = { this.clickC} >
              <Text style={styles.greeting}>Bihar</Text>
          </VrButton>
          <VrButton style={styles.greetingBox} onClick = { this.clickD} >
              <Text style={styles.greeting}>Sikkim</Text>
          </VrButton>
        <Text>{this.state.res}</Text>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});