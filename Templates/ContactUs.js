import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../Styles/Styles'

const contactus = require("../Images/contactus.jpeg")

function ContactUs(props) {
  return (
    <View>
      <View>
        <ImageBackground source={contactus} style={styles.contactusbackground}>
            <Text style={styles.contactform}><Ionicons name='logo-facebook' size={50}/>: Comming soon.....</Text>
            <Text style={styles.contactform}><Ionicons name='logo-instagram' size={50}/>: Comming soon.....</Text>
            <Text style={styles.contactform}><Ionicons name='logo-twitter' size={50}/>: Comming soon.....</Text>
            <Text style={styles.contactform}><Ionicons name='call' size={50}/>: 1-800-Global Market</Text>
        </ImageBackground>
    </View>
    </View>
)}

export default ContactUs