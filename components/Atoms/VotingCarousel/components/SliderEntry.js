import React, { Component, useState } from 'react';
import {  TouchableOpacity,  } from 'react-native';
import { Text,  View, Heading, Divider, HStack, VStack, Progress, Fab} from 'native-base';

import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";



const propTypes = {
    data: PropTypes.object.isRequired,
    // parallax: PropTypes.bool,
    // parallaxProps: PropTypes.object
};


export default function SliderEntry (props) {


    // get image () {
    //     const { data: { illustration }, parallax, parallaxProps } = this.props;

    //     return parallax ? (
    //         <ParallaxImage
    //           source={{ uri: illustration }}
    //           containerStyle={[styles.imageContainer]}
    //           style={styles.image}
    //           parallaxFactor={0.35}
    //           showSpinner={true}
    //           spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
    //           {...parallaxProps}
    //         />
    //     ) : (
    //         <Image
    //           source={{ uri: illustration }}
    //           style={styles.image}
    //         />
    //     );
    // }

   


        const [num, setNum] = useState(0);

        const womp = ["", "25% Dogecoin","50% Bitcoin", "25% cash","$100 Dogecoin","$200 Bitcoin", "$100 cash", "50% Dogecoin (+25%)",
        "20% Bitcoin (-30%)"
        ,"30% cash (+5%)","$200 Dogecoin (+$100)",
        "$80 Bitcoin (-$120)"
        ,"$120 cash (+$20)",
    ];

        const { data: { title, } } = props;

        const uppercaseTitle = title ? (
            <Heading
            color="black"
            >
                { title.toUpperCase() }
            </Heading>
        ) : false;

        return (
                <View style={[styles.textContainer]}>
                    { uppercaseTitle }
                    <Heading
            color="black"
            fontSize={18}
            >10 days left</Heading>
                    <Divider/>

                    <Text
                      style={[styles.subtitle]}
                    >
                        This trade would change this portfolio's risk level from <Text marginTop={6} fontSize={12} color="orange.400">moderate</Text> to <Text marginTop={6} fontSize={12} color="red.400">very high</Text>.
                    </Text>
                    <HStack >
                        <View flex={1} alignItems="center"><Heading fontSize={18} color="black" >Current</Heading></View>
                        <View flex={1} alignItems="center"><Heading fontSize={18} color="black" >Suggested</Heading></View>
                    </HStack>
                    <Divider/>
                    <TouchableOpacity onPress={()=>setNum(num==0 ? 3 : 0)} style={{flexDirection:"row"}}>
                    <View style={styles.splitContainer}>
                    <Text color="black">{womp[1+num]}</Text>
                    <Text color="black">{womp[2+num]}</Text>
                    <Text color="black">{womp[3+num]}</Text>
                    </View>
                    <Divider orientation="vertical" />
                    <View style={styles.splitContainer}>
                    <Text color="green.500">{womp[7+num]}</Text>
                    <Text color="red.500">{womp[8+num]}</Text>
                    <Text color="green.500">{womp[9+num]}</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <Divider/>
                    <Heading fontSize={18} color="black">Suggested by <Heading fontSize={18} color="#D97A07">DogeLover38</Heading></Heading>
                    <Divider/>
                    <Heading fontSize={18} color="black">Reasoning</Heading>
                    <View textAlign="left">
                    <Text color="black">Elon just announced that you can buy Teslas with Dogecoin now. Bitcoin has too many competing cryptocurrencies that the market may shift to.</Text>

                        <VStack space={5}>
                    <Divider/>

                        <Progress min={0} max={400} value={201} colorScheme="red"></Progress>
                        <Heading fontSize={18} alignSelf="center" color="black">199/400 Votes (1 needed; 1 left)</Heading>
                        <Progress value={90} colorScheme="green"></Progress>
                        <Heading fontSize={18} alignSelf="center" color="black">90% of Portfolio Value</Heading>
                        

                        

                        <HStack>
                        <View height="75"></View>

                            <Fab placement="bottom-right" colorScheme="green" renderInPortal={false} size="16" icon={<MaterialIcons color="white" name="check" size="32" />}/>
                            <Fab placement="bottom-left" colorScheme="red" renderInPortal={false} size="16" icon={<MaterialIcons color="white" name="clear" size="32" />}/>

                        </HStack>
                        </VStack>
                    </View>

                    

                    
                </View>

        );
    }
