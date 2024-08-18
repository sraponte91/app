import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Logo from './assets/logo_marketloop.svg';
import Info from './assets/info.svg';
const headerBg = {uri: './assets/pattern_header.png'};


export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={require('./assets/pattern_header.png')} resizeMode="cover" style={styles.imgBg}>
            <Logo style={styles.logoHeader} />
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titles}>Snapshot</Text>
            <Info style={styles.infoIcon}></Info>
        </View>
        <StatusBar style="auto" />
      </View>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logoHeader: {
    position: 'absolute',
    width: 116,
    height: 20,
    left: 24,
    bottom: 16,
  },
  imgBg: {
    flex: 1,
    width: '100%',
    height: 120,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titles: {
      fontSize: 16,
  },
  infoIcon: {
      width: 16,
      height: 16,
  }
});
