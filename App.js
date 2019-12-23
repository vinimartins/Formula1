import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';
import DrivesScreen from './screens/Drives';
import RacesScreen from './screens/Race';
import DrivesDetailsScreen from './screens/DrivesDetails';
// import RacesDetailsScreen from './screens/RaceDetails';
import fonts from './fonts';
import Loading from './components/Loading';

(fonts())


    const AppNavigator = createStackNavigator(
        {
            Home: {
                screen: HomeScreen,
            },
            Season: {
                screen: SeasonScreen,
            },
            Drivers: {
                screen: DrivesScreen,
            },
            Races: {
                screen: RacesScreen,
            },
            DriversDetails: {
                screen: DrivesDetailsScreen
            },
           
        },

        {
            initialRouteName: 'Home',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#333',
                },

                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }
        }


    )

export default createAppContainer(AppNavigator);


