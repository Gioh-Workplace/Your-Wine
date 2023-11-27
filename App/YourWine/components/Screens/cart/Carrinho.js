import React, { useEffect, useContext, useState } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@rneui/themed';

import { CartContext } from '../../../CartContext';
import { styles } from '../../../assets/styles/stylesGeral';
import { styles2 } from '../../../assets/styles/stylesCart';

import logo from '../../../assets/imgs/logo.png';
import nomeDologo from '../../../assets/imgs/logoName.png';

import { buttonStyle} from '../../../assets/styles/stylesButtons';

const Carrinho = ({ route }) => {
 
 const { cart } = useContext(CartContext); 
 
 const [modalVisible, setModalVisible] = useState(false);

 try {
 console.log('Carrinho foi montado');

const total = cart.reduce((total, item) => total + item.precoPromocao, 0);

 return (
   <View style={styles2.container}>
    
      <StatusBar style="auto" />
      <View style={styles.menuDeCima}>
        <Image source={logo} style={styles.logo} />
        <Image source={nomeDologo} style={styles.logo2} />
      </View>

      <Text style={styles2.textTop}>Carrinho</Text>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 1,marginVertical: 15 }} />


     <ScrollView style={styles2.scrollView}>
       
        
          {cart.length > 0 ? (
          cart.map((item) => (
            <View key={item.id} style={{flexDirection:'row'}}>
              <Image source={item.imagem} style={styles2.imagens} />
              <View>
              <Text style={styles2.textPrimary} numberOfLines={1}>{item.nome}</Text>
              <Text style={styles2.textSecondary}>{`  Preço: R$ ${item.precoPromocao}`}</Text>
              </View>
            </View>
          ))
          ) : (
          <View>
            <Text style={styles2.textNenhum}>Nenhum item no carrinho.</Text>
          </View>
          )}

          <Text style={styles2.textTop}>Total: R$: {total}</Text>

            <Button
  title="Comprar"
      buttonStyle={buttonStyle.buttonStyle}
                containerStyle={buttonStyle.buttonContainer}
                titleStyle={buttonStyle.buttonText}
  onPress={() => setModalVisible(true)}
  />
       
     </ScrollView>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles2.centeredView}>
        <View style={styles2.modalView}>
          <Text style={styles2.modalText}>Enviando o Pedido para loja...</Text>
          <TouchableOpacity
            style={{ ...styles2.openButton, backgroundColor: "#691823" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles2.textStyle}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
 )
 } catch (error) {
 console.error(error);
 }
};
export default Carrinho;
