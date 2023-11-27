import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from '../../../assets/styles/stylesGeral';
import { styleSearch } from '../../../assets/styles/stylesSearch';
import { styles2 } from '../../../assets/styles/stylesHome';

const SeuComponente = ({ vinhos }) => {
  const [texto, setTexto] = useState('');

  const vinhosFiltrados = vinhos.filter(vinho => 
    vinho.nome.toLowerCase().includes(texto.toLowerCase())
  );

  return (
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
        <TouchableOpacity style={styles2.menuVinhosBa22} key={index}>
          <Image source={vinho.imagem} style={styles2.menuVinhosBa2Image} />
          <Text style={styleSearch.texto}>{vinho.nome}</Text>
          <Text style={styleSearch.precovinho}>R$:{vinho.precoPromocao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SeuComponente;