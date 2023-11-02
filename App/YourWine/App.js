import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import Constants from './components/Constants/Constants';
import { styles } from './assets/styles/stylesGeral';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>v0.0.1</Text>

    </View>
  );
}

