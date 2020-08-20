import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import LottieView from 'lottie-react-native';


type Props = {};
export default class App extends Component<Props> {
 
  componentDidMount() {
    // Or set a specific startFrame and endFrame with:
    this.animation.play();
    this.animation2.play();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
         <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('./location.json')}
          />
        </View>
        <View style={{flex:1}}>
           <LottieView
            ref={animation => {
              this.animation2 = animation;
            }}
            source={require('./dragon.json')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
  }
});
