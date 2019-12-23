import React from 'react';
import { View, Image } from 'react-native';

class Loading extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={{ uri: "https://tenor.com/xVgl.gif" }}
                    style={styles.img}
                />
            </View>
        )
    }
}

const styles = {
    img: {
        height:400,
        width:400,
        justifyContent:'center',
        alignItems:'center'
    }
}

export default Loading;