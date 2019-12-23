import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView  , ScrollView} from 'react-navigation';
import { List, ListItem, Text,Card, CardItem } from 'native-base';

export default class Drivers extends React.Component {

   constructor(props) {
    super(props);
    this.driversDetails = this.driversDetails.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  static navigationOptions = {
    title: 'Ver Pilotos',
  };

  state = {
    drivers: [],
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season)
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          drivers: data.MRData.DriverTable.Drivers,
        });
      });
  }

  driversDetails(driverId) {
    season = this.props.navigation.getParam('season');
    Promise.all([
      fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`),
      fetch(`http://ergast.com/api/f1/${season}/drivers/${driverId}/results.json`)
    ]).then(async([driver, driverResults]) => {
      const driverJson = await driver.json();
      const driverResultsJson = await driverResults.json();
      return [driverJson, driverResultsJson]
    })
    .then((data) => {
      drivers = data[0].MRData.DriverTable.Drivers;
      driverResults = data[1].MRData.RaceTable.Races;
      this.props.navigation.navigate('DriversDetails', {
        drivers,
        driverResults,
        season,
      });
    });
  }

  renderRow(item) {
    return (
      <Card key={item.driverId} >
        <CardItem button onPress={() => this.driversDetails(item.driverId)}>
          <Text>
             {item.givenName} {item.familyName}   {item.nationality}
           </Text> 
        </CardItem>
      </Card>
      
    )
  }

  render() {
    return (
      <SafeAreaView>
         <Text style={styles.title}>Navegue para saber mais</Text>
        <ScrollView>
          {this.state.drivers.map(this.renderRow)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
  },
});
