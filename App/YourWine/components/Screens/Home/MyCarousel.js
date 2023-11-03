import * as React from 'react';
import { Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Constants from '../../Constants/Constants';
import { styles } from '../../../assets/styles/stylesCarousel';

export default class MyCarousel extends React.Component {

 
    constructor(props){
        super(props);

        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            text: "Vinícola localizada em Farroupilha, na Serra Gaúcha, é uma vinícola fundada em 1948, a Your Wine preserva a história da vitivinicultura do Brasil e age com zelo na preservação ecológica e está inserida na modernidade produtiva, resguardando a excelência da qualidade do que a natureza oferece.",
            Image: require('../../../assets/imgs/fundoCarrossel.png'),
          },
          {
            text: "Vinícola localizada em Farroupilha, na Serra Gaúcha, é uma vinícola fundada em 1948, a Your Wine preserva a história da vitivinicultura do Brasil e age com zelo na preservação ecológica e está inserida na modernidade produtiva, resguardando a excelência da qualidade do que a natureza oferece.",
          },
          {
            text: "Vinícola localizada em Farroupilha, na Serra Gaúcha, é uma vinícola fundada em 1948, a Your Wine preserva a história da vitivinicultura do Brasil e age com zelo na preservação ecológica e está inserida na modernidade produtiva, resguardando a excelência da qualidade do que a natureza oferece.",
          },
          {
            text: "Vinícola localizada em Farroupilha, na Serra Gaúcha, é uma vinícola fundada em 1948, a Your Wine preserva a história da vitivinicultura do Brasil e age com zelo na preservação ecológica e está inserida na modernidade produtiva, resguardando a excelência da qualidade do que a natureza oferece.",
          },
          {
            text: "Vinícola localizada em Farroupilha, na Serra Gaúcha, é uma vinícola fundada em 1948, a Your Wine preserva a história da vitivinicultura do Brasil e age com zelo na preservação ecológica e está inserida na modernidade produtiva, resguardando a excelência da qualidade do que a natureza oferece.",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={styles.renderItem}>

            <ImageBackground source={item.Image} style={styles.imageBackground}>
              <Text style={styles.renderItemText}>{item.text}</Text>
            </ImageBackground>
            
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.view}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={Constants.MAX_WIDTH}
                  itemWidth={Constants.MAX_WIDTH}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

