import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <MaterialCommunityIcons
          name='note-edit-outline'
          style={styles.icon}
          color='black'
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    marginRight: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
  },
  content: {
    fontSize: 18,
    
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  textWrapper: {
    marginTop: 10,
    backgroundColor: '#ced4da',
    borderRadius: 5,
  },
  container: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 100,
    paddingHorizontal: 5,
  },
});

export default ShowScreen;
