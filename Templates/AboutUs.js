import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/Styles'

const about = require("../Images/aboutus.jpeg")

const character = {
    name: 'Global Market',
    home: 'Buffalo, New York',
    species: 'human'}

function AboutUs(props) {
    const { navigation } = props
  return (
    <View>
        <ImageBackground source={about} style={styles.Aboutusimage}>
            <TouchableOpacity style={styles.contactus} onPress={() => navigation.navigate('ContactUs', { item: character })}>
                <Text style={styles.contactustext}>contact us</Text>
            </TouchableOpacity>
            <Text style={styles.AboutusText}>Our bussiness was founded in 2020,
            during the covid 19. Our company made a big decision to went fully online, shipping products around world.
            We are currently location in Buffalo New York.</Text>
        </ImageBackground>
    </View>
  )
}
export default AboutUs