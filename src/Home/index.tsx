import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { stylesHome } from './styles';
import RNPickerSelect from "react-native-picker-select";
import themes from '../global/themes';

export default function Home() {
  const [moeda, setMoeda] = useState("");
  const [kwanza, setKwanza] = useState("");
  const [result, setResult] = useState();


  return (
    <View style={stylesHome.Container}>
      <StatusBar style="auto" />

      <View style={stylesHome.Header}>
        <Text style={stylesHome.Title}>Conversor de móedas</Text>
      </View>
      <View style={stylesHome.Form}>
        <TextInput 
            style={stylesHome.Input}
            placeholder='Valor em kwanza'
            keyboardType='numeric'
            value={kwanza}
            onChangeText={(t) => setKwanza(t) }
        />
        <View style={stylesHome.PickerSelect}>
          <RNPickerSelect 
            onValueChange={(value) => setMoeda(value)}
            items={[
              { label: "Dólar Americano (USD)", value: "USD" },
              { label: "Euro (EUR)", value: "EUR" }
            ]}
            placeholder={{ label: "Converter para...", value: null, }}
            style={{
              placeholder: {
                color: themes.colors.texto, // Cor do placeholder
                fontSize: 16,
                textAlign: "center",
              }
            }}
          />
        </View>

        <View style={stylesHome.areaResult}>
          <Text style={stylesHome.titleResult}>Resultador</Text>
          <View style={stylesHome.areaValor}>
            <View style={stylesHome.areaMoeda}>
              <Text style={stylesHome.textoMoeda}>$</Text>
            </View>
            <View>
              <Text style={stylesHome.valor}>{kwanza}</Text>
              <Text style={stylesHome.titleMoeda}>Dólar Americano $</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}


