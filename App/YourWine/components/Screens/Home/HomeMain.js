import React, { useState }from 'react';

import { StatusBar } from 'expo-status-bar';
import { Image, View, TouchableOpacity, Text, ScrollView, ImageBackground} from 'react-native';

import { styles } from '../../../assets/styles/stylesGeral';
import { styles2 } from '../../../assets/styles/stylesHome';

import logo from '../../../assets/imgs/logo.png';
import nomeDologo from '../../../assets/imgs/logoName.png';
import vinhoBranco from '../../../assets/imgs/vinhoBranco.png';
import vinhoTinto from '../../../assets/imgs/vinhoTinto.png';
import vinhoRose from '../../../assets/imgs/vinhoRose.png';
import promocao from '../../../assets/imgs/promocao.png';

import { vinhos } from '../../Components/Vinhos';
import OverlayComponent from '../descricao/OverlayComponent';

const HomeMain = () => {

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
                <Image source={logo} style={styles.logo}/>
                <Image source={nomeDologo} style={styles.logo2}/>
            </View>

            <ScrollView style={styles.scrollView}>

                <View style={styles2.menuVinhosBa1}>

                    <TouchableOpacity  style={styles2.menuVinhosBa11}>
                        <Image source={vinhoBranco} style={styles2.menuVinhosBa1Image} />
                        <Text style={styles2.textoVinhosBa}>Vinho Branco</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={styles2.menuVinhosBa11}>
                        <Image source={vinhoRose} style={styles2.menuVinhosBa1Image}  />
                        <Text style={styles2.textoVinhosBa}>Vinho Rosé</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa11}>
                        <Image source={vinhoTinto} style={styles2.menuVinhosBa1Image}  />
                        <Text style={styles2.textoVinhosBa}>Vinho Tinto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa11}>
                        <Image source={promocao} style={styles2.menuVinhosBa1Image} />
                        <Text style={styles2.textoVinhosBa}>Promoções!</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles2.novidadesVinhos}>Novidades Imperdíveis!</Text>

                <View style={styles2.menuVinhosBa2}>

                  {vinhos.map((vinho) => (
                      <TouchableOpacity
                        key={vinho.id}
                        style={styles2.menuVinhosBa22}
                        onPress={() => toggleOverlay(vinho)}
                      >
                        <Image source={vinho.imagem} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$: {vinho.preco}</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$: {vinho.precoPromocao}</Text>
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

export default HomeMain;