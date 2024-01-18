import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useHandleApi } from './ReactQuery';

const Stack2 = ({ navigation }) => {
  const { isLoading, error, data } = useHandleApi()

  if (isLoading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40,color:'red' }}>Loading...</Text>
    </View>
  );
  if (error) console.log('An error occurred while fetching the user data ', error);

  return (
    <View>
      <Button
        title="Go to Stack 3"
        onPress={() => navigation.navigate('Stack3')}
      />
      <View style={{ backgroundColor: 'black' }}>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.userID}>UserID:- {item.userId}</Text>
              <Text style={styles.title}>Title:- {item.title}</Text>
              <Text style={styles.body}>Body:- {item.body}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
    padding: 10,

  },
  modeButton: {
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  card: {
    backgroundColor: 'rgb(196, 241, 107)',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  header: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
    color: 'yellow',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 20
  },
  userID: {
    marginVertical: 5,
    color: 'brown',
    fontSize: 20
  },
  title: {
    marginVertical: 5,
    color: 'red',
  },
  body: {
    marginVertical: 5,
    color: 'blue'
  },

});



export default Stack2;
