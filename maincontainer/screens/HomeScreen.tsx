import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet,ActivityIndicator, TouchableOpacity} from 'react-native';
import ItemDetailsScreen from './ItemDetailsScreen';
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();
    const MovieItem = ({ title, imageUrl, price, onPress }) => (
  <TouchableOpacity style={styles.movieItem} onPress={onPress}>
    <Image source={{ uri: imageUrl }} style={styles.movieImage} />
    <View style={styles.movieDetails}>
      <Text>{title}</Text>
      <Text>Price: {price}</Text>
      </View>
  </TouchableOpacity>
);


export default function HomeScreen({navigation})  {

  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const newData = await response.json();
          setData((prevData) => [...prevData, ...newData]);
          setPage(page + 1);
        } catch (error) {
          console.error('Error fetching data: ', error);
        } finally {
          setLoading(false);
        }
      };
      const renderFooter = () => {
        return loading ? <ActivityIndicator size="large" color="blue" /> : null;
      };
  
  const renderItem = ({ item }) => (
    <MovieItem title={item.title} imageUrl={item.image} price={item.price} onPress={() => navigation.navigate('movieDetails', {
      title: item.title,
      imageUrl: item.image,
      price: item.price,
      description: item.description
    })}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1} 
        ListFooterComponent={renderFooter}
      />
      <TouchableOpacity onPress={navigation.navigate('ItemDetailsScreen')}><Image source={{ uri: "https://www.mariab.pk/cdn/shop/files/MB-F24-502Lemon_1800x1800.jpg?v=1713967328" }} style={styles.movieImage} /></TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  movieItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },

  movieImage: {
    width: 250,
    height: 250,
    marginRight: 10,
  },
  movieDetails: {
    flex: 1,
  },
}
);