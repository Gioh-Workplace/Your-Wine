import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View, ScrollView } from 'react-native';
import SeuComponente from './MeuComponente';
import logo from '../../../assets/imgs/logo.png';
import nomeDologo from '../../../assets/imgs/logoName.png';
import { vinhos } from '../../Components/Vinhos';
import { Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../../assets/styles/stylesGeral';
import { styleSearch } from '../../../assets/styles/stylesSearch';
import { styles2 } from '../../../assets/styles/stylesHome';
import OverlayComponent from '../descricao/OverlayComponent';

const SearchPage = () => {
  const [teste, setTeste] = useState("");
  const [results, setResults] = useState([]);

  const [texto, setTexto] = useState('');

  const vinhosFiltrados = vinhos.filter(vinho => 
    vinho.nome.toLowerCase().includes(texto.toLowerCase())
  );

  const handleSearch = useCallback(() => {
    if (teste === '') {
      setResults(vinhos);
    } else {
      const filteredResults = vinhos.filter(vinho =>
        vinho.nome.toLowerCase().includes(teste.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [teste]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedWine, setSelectedWine] = useState(null);

  const toggleOverlay = (wineInfo) => {

    console.log('Informações do Vinho:', wineInfo);

    setSelectedWine(wineInfo);
    setOverlayVisible(!overlayVisible);
  };

  const handleBackdropPress = () => {
    setOverlayVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.menuDeCima}>
        <Image source={logo} style={styles.logo} />
        <Image source={nomeDologo} style={styles.logo2} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styleSearch.flexContainer}>
      <TextInput
      autoCorrect={false}
      style={styleSearch.textInput}
      clearButtonMode="always"
      value={texto}
      onChangeText={setTexto}
        
        placeholder="Digite o nome do vinho"
      />
      {vinhosFiltrados.map((vinho, index) => (
        <TouchableOpacity style={styles2.menuVinhosBa22} key={index} onPress={() => toggleOverlay(vinho)}>
          <Image source={vinho.imagem} style={styles2.menuVinhosBa2Image} />
          <Text style={styleSearch.texto}>{vinho.nome}</Text>
          <Text style={styleSearch.precovinho}>R$:{vinho.precoPromocao}</Text>
        </TouchableOpacity>
      ))}
    </View>
      </ScrollView>


      {overlayVisible && (
              <OverlayComponent
                isVisible={overlayVisible}
                onBackdropPress={handleBackdropPress}
                wineInfo={selectedWine}
              />
            )}
    </View>
  );
};

export default SearchPage;
