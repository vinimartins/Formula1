import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { List, ListItem, Text, View, Card, CardItem } from 'native-base';

export default class DriversDetails extends React.Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  static navigationOptions = {
    title: 'Pilotos',
  };

  componentDidMount() {
    drivers = this.props.navigation.getParam('drivers');
    driverResults = this.props.navigation.getParam('driverResults');
    season = this.props.navigation.getParam('season');
  }
  
  renderDetails(item) {
    return (
      <Card key={item.driverId}>
        <Text style={styles.title}>
          {`${item.givenName} ${item.familyName}`}
        </Text>
        <Text style={styles.texto}>
          {`Nascido em ${item.dateOfBirth} na  ${item.nationality}`}
        </Text>
      </Card>
    )
  }

  renderResults(item) {

    return (
      <ListItem key={item.round}>
        <Text>
          {`Corrida ${item.raceName} `}
          {"\n"}
          {`Posição ${item.Results[0].position}`} {` Voltas ${item.Results[0].laps} `}
        </Text>
      </ListItem>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <Card>
          {drivers.map(this.renderDetails)}
          <Text style={styles.subTitle}>
            {`Temporada ${season}`}
          </Text>
          <ScrollView>
            <List>
              {driverResults.map(this.renderResults)}
            </List>
          </ScrollView>
        </Card>
      </SafeAreaView>
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
  /*title: {
    marginTop: '5%',
    marginBottom: "2%",
    marginLeft: "20%",
    color: "blue",
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center ',
  },*/
  texto: {
    marginBottom: '3%',
    marginTop: '1%',
    marginLeft: "15%",
    fontSize: 16,
  },
  subTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "20%",
  }
});