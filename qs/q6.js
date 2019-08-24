import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';


export default class q6 extends React.Component {

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
      res :'You are Right.'
    })
  }

  clickB = () => {
    if(this.state.answered==0)
    this.setState({
      answered : 1,
      res :'You are Wrong. Correct Answer is A'
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
        <Text style={styles.greetingBox}>Sati was declared illegal and punishable by?</Text>
         <VrButton style={styles.greetingBox} onClick = { this.clickA} >
              <Text style={styles.greeting}>Lord William Bentinck</Text>
          </VrButton>
          <VrButton id='B' style={ styles.greetingBox } 
            onClick = {this.clickB} >
              <Text style={styles.greeting}>Lord Ripon</Text>
          </VrButton>
          <VrButton style={styles.greetingBox} onClick = { this.clickC} >
              <Text style={styles.greeting}>Lord Canning</Text>
          </VrButton>
          <VrButton style={styles.greetingBox} onClick = { this.clickD} >
              <Text style={styles.greeting}>Lord Dalhousie</Text>
          </VrButton>
          <View style={styles.alertBox}>
            <Text style={styles.alert}>{this.state.res}</Text>
          </View>
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
  alertBox: {
    height: 40,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor: '#228b22'
  },
  alert: {
    fontSize:20,
  },
});
