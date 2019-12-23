import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Button, Card } from 'native-base';

export default class RaceDetails extends React.Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);
  }
  static navigationOptions = {
    title: 'Detalhes das Corridas'
  };

  state = {
    races: [],
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    const round = this.props.navigation.getParam('round');
    this.getData(season, round)
  }

  getData(season, round) {
    fetch(`http://ergast.com/api/f1/${season}/${round}/races.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          races: data.MRData.RaceTable.Races,
        });
      });
  }

  renderDetails(item) {
    return (
      <Card key={item.round} style={styles.container}>

        <Text style={styles.title}>
          {item.raceName}
        </Text>

        <Text style={styles.subTitle}>
          {` Temporada  GP de F1 do ano ${item.season}`}
        </Text>

        <Text style={styles.subTitle}>
          {item.Circuit.circuitName}
        </Text>

        <Text style={styles.text}>
          {`Local - ${item.Circuit.Location.locality} - ${item.Circuit.Location.country}`}
        </Text>

        <Button style={styles.button}
          onPress={() => {
            Linking.openURL(item.Circuit.url)
          }}>

          <Text style={styles.textButton}>
            Clique aqui e veja  mais sobre a corrida
          </Text>
          
        </Button>
      </Card>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.races.map(this.renderDetails)}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: "20%",
    marginBottom: "2%",
    marginLeft: "3%",
    justifyContent: 'center',

  },
  title: {
    margin: 20,
    color: "blue",
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center '
  },
  subTitle: {
    justifyContent: 'center',
    alignItems: 'center ',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center ',
    fontSize: 18,
    margin: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center ',
    width: '100%'
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

