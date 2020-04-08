import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            altitude: 43.651070,
            longitude: -79.347015,
            error: null
        };
    }

    onButtonPress = () => {
        this.setState({
            startBtn: true
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >Nearby fast food restaurants</Text>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 49.133129,
                        longitude: -122.871460,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.00121,
                    }}
                    provider={MapView.PROVIDER_GOOGLE}
                >
                    <MapView.Marker
                        coordinate={this.state}
                    />
                </MapView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 10,
        bottom: 10,
        fontSize:22,
        color:"#F9A143",
        fontWeight:'600',
    },
    map: {
        position: 'absolute',
        top: 40,
        left: 0,
        bottom: 0,
        right: 0
    },
});