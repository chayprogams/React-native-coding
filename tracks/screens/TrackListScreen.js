import React, { useEffect, useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TrackContext } from '../Context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { states, fetchTracks } = useContext(TrackContext);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracksWrapper = async () => {
      try {
        setIsLoading(true);  // Set loading state to true before fetching
        setError(null);  // Clear previous errors
        await fetchTracks();
      } catch (error) {
        setError(error.message || 'Error fetching tracks');
      } finally {
        setIsLoading(false);  // Set loading state to false after fetching
      }
    };

    fetchTracksWrapper();  // Fetch tracks on initial render

    const unsubscribe = navigation.addListener('focus', () => {
      fetchTracksWrapper();  // Fetch tracks when the screen is focused
    });

    return unsubscribe;
  }, [navigation, fetchTracks]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.date ? new Date(item.date).toLocaleDateString() : 'No Date Available'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading tracks...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={states}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
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
});

export default TrackListScreen;
