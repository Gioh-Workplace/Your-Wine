import React, { useState, useContext } from 'react';
import { Overlay, Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../../../CartContext';
import { buttonStyle} from '../../../assets/styles/stylesButtons';

import { styles } from '../../../assets/styles/stylesDescricao';

type OverlayComponentProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
  wineInfo: {
    name: string;
    imagem: any;
    descricao: string;
    preco: number;
    precoPromocao: number;
    detalhes: string[];
  };
};

const OverlayComponent: React.FunctionComponent<OverlayComponentProps> = ({
  isVisible,
  onBackdropPress,
  wineInfo,
}) => {
  
  const { nome, imagem, descricao, preco, precoPromocao, detalhes } = wineInfo ?? {};
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  const handleComprar = () => {
    console.log('handleComprar foi chamado');
    addToCart(wineInfo);
    onBackdropPress();
  };

  return (
    <Overlay isVisible={isVisible} onBackdropPress={onBackdropPress} overlayStyle={styles.overlayStyle}>
      <ScrollView style={styles.scrollView}>

        <Image source={imagem} style={styles.suaImagemStyle} />
        <Text style={styles.textPrimary}>{nome}</Text>
        <Text style={styles.textSecondary}>{descricao}</Text>
        <Text style={styles.textSecondary}>{`Preço: R$ ${preco}`}</Text>
        <Text style={styles.textSecondary}>{`Preço Promocional: R$ ${precoPromocao}`}</Text>

        <Text style={styles.textSecondary}>Detalhes:</Text>
        <View>
         {(detalhes ?? []).map((detalhe, index) => (
                <Text key={index} style={styles.textSecondary}>{`- ${detalhe}`}</Text>
         ))}
       </View>


        <Button
          title="Adicionar no carrinho"
          buttonStyle={buttonStyle.buttonStyle}
          containerStyle={buttonStyle.buttonContainer}
          titleStyle={buttonStyle.buttonText}
          onPress={handleComprar}
        />

        <Button
              title="Fechar"
              buttonStyle={buttonStyle.buttonStyle}
              containerStyle={buttonStyle.buttonContainer}
              titleStyle={buttonStyle.buttonText}
              onPress={onBackdropPress}
        />

      </ScrollView>  
    </Overlay>
  );
};

export default OverlayComponent;
