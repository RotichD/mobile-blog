import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title: </Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
        value={title}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        onChangeText={(content) => setContent(content)}
        style={styles.input}
        value={content}
      />
      <Button
        title='Add Blog Post'
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    backgroundColor: '#ced4da',
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default CreateScreen;
