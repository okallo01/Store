import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity, Linking,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from '../Styles/Styles';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch("https://raw.githubusercontent.com/okallo01/data/main/data%20-%20Sheet1.json");
      const json = await response.json();
      setData(json.shop);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      <View style={styles.searchbar}> 
        <TextInput style={styles.input} placeholder="Search" />
        <TouchableOpacity><Ionicons name='search-circle' size={50} color="white"/></TouchableOpacity>
      </View>
    <ScrollView >
      {data.map((product) => {
        const pic = "https://m.media-amazon.com/images/I/71z5B7UmJJL._AC_UY879_.jpg"
            return (
              <View style={styles.imagesbox} key={product.id}>
                <Image source={{uri: product.Image}} style={styles.imagesize}/>
                <Text style={styles.producttext}>{product.ProductName}</Text>
                <Text style={styles.price}>{product.Price}</Text>
                <TouchableOpacity style={styles.buynowbutton} onPress={()=> {Linking.openURL(product.link)}}>
                  <Text>Buy Now</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 10, fontWeight:"bold"}}>Describtion:</Text>
                <Text>{product.Describtion}</Text>
              </View>
            );
          })}
    </ScrollView>
    </View>
  );
};