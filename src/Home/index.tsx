import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import themes from '../global/themes';
import { api } from '../lib/axios';
import { stylesHome } from './styles';
//url: https://v6.exchangerate-api.com/v6/${API_KEY}/latest/AOA

export default function Home() {
  const [apiKey, setApiKey] = useState<string>("");
  const [moeda, setMoeda] = useState("");
  const [kwanza, setKwanza] = useState("");
  const [result, setResult] = useState<string>("$");


  useEffect(() => {
    const getApiKey = async () => {
      try {
        const key = await process.env.EXPO_PUBLIC_API_KEY as string;
        if (key) {
          setApiKey(key);
        } else {
          Alert.alert("Erro", "API_KEY não encontrada no ambiente.");
        }
      } catch (error) {
        console.error('Erro ao buscar API_KEY:', error);
        Alert.alert("Erro", "Ocorreu um erro ao carregar a API_KEY.");
      }
    };
    getApiKey();
  }, []);

  const handleConverter = async () => {
    console.log('apiKey:', apiKey);
    if (!apiKey) {
      Alert.alert("Erro", "API_KEY não disponível.");
      return;
    }

    if (!moeda || !kwanza) {
      Alert.alert("Erro", "Preencha o valor e selecione a moeda.");
      return;
    }

    try {
      const { data } = await api.get(`${apiKey}/latest/AOA`);
      const rates = data.conversion_rates;

      if (rates[moeda]) {
        const valorConvertido = parseFloat(kwanza) * rates[moeda];
        setResult(valorConvertido.toFixed(2));
      } else {
        Alert.alert("Erro", "Moeda não encontrada.");
      }
    } catch (error) {
      console.error('Erro ao converter moeda:', error);
      Alert.alert("Erro", "Ocorreu um erro ao converter a moeda.");
    }
  };

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
          onChangeText={(t) => setKwanza(t)}
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
          <Text style={stylesHome.titleResult}>Resultado</Text>
          <View style={stylesHome.areaValor}>
            <View style={stylesHome.areaMoeda}>
              <Text style={stylesHome.textoMoeda}>{result}</Text>
            </View>
            <View>
              <Text style={stylesHome.valor}>{kwanza}</Text>
              <Text style={stylesHome.titleMoeda}>Dólar Americano $</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={stylesHome.BtnConverter} onPress={handleConverter}>
          <Text style={stylesHome.BtnConverterTexto}>Converter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


