import React from 'react'
import { Image, View, Text, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../Styles/Styles'

const homepage = require("../Images/homebackground.jpeg");
const character = {
  name: 'Luke Skywalker',
  home: 'Tatooine',
  species: 'human'
}

function Home(props) {
  const { navigation } = props
  return (
    <View>
        <ImageBackground source={homepage} style={styles.homebackground}>
            <View style={styles.HomePageTitle}>
                <Text style={styles.HomePageTitleText}><Ionicons name='cart' size={30}/> WELCOME TO OUR STORE</Text>
            </View>
            <View>
                <Text style={styles.hometext}>Enjoy the <Text style={{color:"yellow"}}>Global</Text><Text style={{color:"green"}}> Market</Text> shopping experience!!</Text>
            </View>
        </ImageBackground>
        
    </View>
  )
}

export default Home