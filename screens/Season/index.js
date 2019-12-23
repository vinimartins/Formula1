import React from 'react';
import { StyleSheet} from 'react-native';
import{Button, View ,Text,  List, ListItem, ScrollView} from 'native-base';
import { SafeAreaView } from 'react-navigation';
import Seasons  from '../../components/Seasons';

export default class Season extends React.Component {

  constructor(props) {
    super(props);
    this.Races = this.Races.bind(this);
    this.Drivers = this.Drivers.bind(this);
  }
  
  static navigationOptions = {
    title: 'GP',
  };
  state = {
    results: 0,
};
  componentDidMount(){
    const season = this.props.navigation.getParam('season');

    this.setState({
        results: season
    });
}
Races() {
  season = this.props.navigation.getParam('season');
  this.props.navigation.navigate('Races', {
    season,
  });
}

Drivers() {
  season = this.props.navigation.getParam('season');
  this.props.navigation.navigate('Drivers', {
    season,
  });
}

redirectToDrivers(){
    this.props.navigation.navigate('Drivers', {
        season: this.state.results
    });
}

render(){
  return (
      <SafeAreaView  style={styles.container}>
        <Text style={styles.texto}>Escolha o que deseja ver sobre o GP</Text>
        <Text style={styles.label}>Conheça mais sobre as corridas </Text>
          <Button style={styles.button} onPress={this.Races}>
              <Text>Corridas</Text> 
          </Button>
          <Text  style={styles.label}>Veja + sobre os pilotos </Text>
          <Button style={styles.button} onPress={ this.Drivers}>
              <Text>Pilotos</Text> 
          </Button>
      </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'blue',
   fontWeight: 'bold',
   fontSize: 16,
   marginTop: "2%",
   marginBottom: "2%"
  },
  label:{
    
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "20%",
    marginBottom: "2%",
  },
  button:{
    width:"96%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
  }
});

