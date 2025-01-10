import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import TextBoldS from './ui-components/texts/TextBoldS';
import TextBoldM from './ui-components/texts/TextBoldM';
import TextBoldL from './ui-components/texts/TextBoldL';
import TextBoldXL from './ui-components/texts/TextBoldXL';
import TextRegularM from './ui-components/texts/TextRegularM';
import TextRegularS from './ui-components/texts/TextRegularS';
import TextMediumM from './ui-components/texts/TextMediumM';
import TextMediumS from './ui-components/texts/TextMediumS';
export default function App() {
  const [fontsLoaded] = useFonts({
    Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf")
  })
  return fontsLoaded ? (
    <View style={styles.container}>
      <TextBoldS blue>Open up App.js to start working on your app!</TextBoldS>
      <TextBoldM blue>Open up App.js to start working on your app!</TextBoldM>
      <TextBoldL blue>Open up App.js to start working on your app!</TextBoldL>
      <TextBoldXL blue>Open up App.js to start working on your app!</TextBoldXL>
      <TextRegularS blue>Open up App.js to start working on your app!</TextRegularS>
      <TextRegularM blue>Open up App.js to start working on your app!</TextRegularM>
      <TextMediumS blue>Open up App.js to start working on your app!</TextMediumS>
      <TextMediumM blue>Open up App.js to start working on your app!</TextMediumM>

      <StatusBar style="auto" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
