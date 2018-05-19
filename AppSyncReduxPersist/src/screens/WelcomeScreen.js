// @flow
import React from 'react';
import { View, Text, Platform, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles';
import { setName } from '../actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native! {props.name}
      </Text>
      <Text style={styles.instructions}>
        To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
      <TextInput onChangeText={props.setName} style={styles.textinput} />
    </View>
  );
}


WelcomeScreen.propTypes = {
  setName: PropTypes.func.isRequired,
  name: PropTypes.string,
};

WelcomeScreen.defaultProps = {
  name: '',
};

const mapStateToProps = state => ({ name: state.name });
const mapDispatchToProps = { setName };
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
