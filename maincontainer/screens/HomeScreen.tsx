import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet,ActivityIndicator} from 'react-native';

const MovieItem = ({ title, imageUrl, imdbRating }) => (
    
  <View style={styles.movieItem}>
    <Image source={{ uri: imageUrl }} style={styles.movieImage} />
    <View style={styles.movieDetails}>
      <Text>{title}</Text>
    </View>
  </View>
);

export default function HomeScreen()  {

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
    <MovieItem title={item.title} imageUrl={item.image} imdbRating={item.price}  />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});