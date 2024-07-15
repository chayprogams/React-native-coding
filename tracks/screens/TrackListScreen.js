import React, { useEffect, useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TrackContext } from '../Context/TrackContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks } = useContext(TrackContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTracksWrapper = async () => {
      try {
        setIsLoading(true);
        await fetchTracks();
        const trackData = await AsyncStorage.getItem('TrackData');
        // console.log('trackData from AsyncStorage:', trackData); // Log retrieved data

        if (trackData) {
          const parsedData = JSON.parse(trackData); // Parse the JSON string
          setData(parsedData.trackData);
          console.log(data);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message || 'Error fetching tracks');
        setIsLoading(false);
      }
    };

    fetchTracksWrapper(); // Fetch tracks on initial render

    const unsubscribe = navigation.addListener('focus', fetchTracksWrapper);

    return unsubscribe;
  }, []); // Added dependencies to useEffect

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>
          {item.date ? new Date(item.date).toLocaleDateString() : 'No Date Available'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading tracks...</Text>
      ) : error ? (
        <Text style={styles.error}>Error: {error}</Text>
      ) : data ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id.toString()} // Convert _id to string
          renderItem={renderItem}
        />
      ) : (
        <Text>No tracks found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 15,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  error: {
    color: 'red',
  },
});

export default TrackListScreen;
