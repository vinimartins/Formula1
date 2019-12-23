import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-navigation';
import Seasons from '../../components/Seasons';
import fonts from './../../fonts'

(fonts());

export default class Races extends React.Component {

  static navigationOptions = {
    title: 'Corridas',
  };
  // async loadFonts() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
  //   });
  //   this.setState({ isReady: true });
  // }

  constructor(props) {
    super(props);
    this.RacesDetails = this.RacesDetails.bind(this);
    this.renderItem = this.renderItem.bind(this);
    
    
  }


  state = {
    races: [],
  };

  RacesDetails(round) {
    season = this.props.navigation.getParam('season');
    this.props.navigation.navigate('RacesDetails', {
      season,
      round,
    });
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season)
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/races.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          races: data.MRData.RaceTable.Races,
        });
      });
  }
  
  
  
  // componentWillMount() {
  //   this.loadFonts();
  // }

  renderItem(item) {
    return (
      <Card key={item.round}  >
        <CardItem button onPress={() => this.RacesDetails(item.round)}>
          <Text style={styles.texto} > GP: {item.raceName}</Text>
        </CardItem>
      </Card>

    )
  }



  render() {
  //  if (!this.state.isReady) {
      return (
        <SafeAreaView>
          <Text style={styles.title}>Lista dos grandes prêmios</Text>
          <ScrollView>
            {this.state.races.map(this.renderItem)}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
// }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      marginBottom: '5%',
      marginTop: '5%',
      marginLeft: "10%",
    }, button: {
      width: "96%",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: "5%",
      marginBottom: "2%",
      marginLeft: "10%",
    }, title: {
      margin: 20,
      color: "blue",
      fontWeight: 'bold',
      fontSize: 30
    },
  });

