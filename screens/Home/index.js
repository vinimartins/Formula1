import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Seasons from '../../components/Seasons';
import fonts from '../../fonts';

(fonts());

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    this.redirectTo = this.redirectTo.bind(this);
  }
  redirectTo(season) {
    this.props.navigation.navigate('Season', {
      season
    });
  }
  static navigationOptions = () => {
    return {
      title: 'Fórmula 1',
    };
  }
  redirectTo(season) {
    this.props.navigation.navigate('Season', {
      season
    });
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((respose) => respose.json())
      .then((data) => {
        console.log(data)
      }
      )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>
          Escolha o ano do GP
          </Text>

        <ScrollView>
          <Seasons handleClick={this.redirectTo} />
        </ScrollView>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: "2%",
    marginBottom: "2%"
  },
});
