import React from 'react';

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

import vinho1 from '../../../assets/imgs/vinho1.png';
import vinho2 from '../../../assets/imgs/vinho2.png';
import vinho3 from '../../../assets/imgs/vinho3.png';
import vinho4 from '../../../assets/imgs/vinho4.png';

import MyCarousel from '../Home/MyCarousel';

export default function HomeMain() 
{
    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            
            <View style={styles.menuDeCima}>
                <Image source={logo} style={styles.logo}/>
                <Image source={nomeDologo} style={styles.logo2}/>
            </View>

            <ScrollView style={styles.scrollView}>

                <MyCarousel/>

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

                    <TouchableOpacity style={styles2.menuVinhosBa22}>
                        <Image source={vinho1} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$:120,00</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$:100,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa22}>
                        <Image source={vinho2} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$:180,00</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$:120,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa22}>
                        <Image source={vinho3} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$:178,00</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$:110,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa22}>
                        <Image source={vinho4} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$:120,00</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$:80,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa22}>
                        <Image source={vinho2} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$:220,00</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$:120,00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles2.menuVinhosBa22}>
                        <Image source={vinho1} style={styles2.menuVinhosBa2Image} />
                        <Text style={styles2.textoVinhospromocao1}>R$:320,00</Text>
                        <Text style={styles2.textoVinhospromocao2}>R$:100,00</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
            
        </View>
    );
}