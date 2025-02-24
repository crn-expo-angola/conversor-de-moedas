import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { stylesHome } from './styles';

export default function Home() {
  return (
    <View style={stylesHome.container}>
      <StatusBar style="auto" />

      <View style={stylesHome.Header}>
        <Text style={stylesHome.Title}>Conversor de móedas</Text>
      </View>
      <View style={stylesHome.Form}>
        <TextInput 
            style={stylesHome.Input}
            placeholder='Valor em kwanza'
        />
      </View>

    </View>
  );
}