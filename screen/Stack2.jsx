import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useHandleApi } from './ReactQuery';
import { styles } from './StackStyle';

const Stack2 = ({ navigation }) => {
  const { isLoading, error, data } = useHandleApi()

  if (isLoading) return (
    <View style={styles.isLoading}>
      <Text style={styles.isLoadingText}>Loading...</Text>
    </View>
  );
  if (error) return (

    <View style={styles.isLoading}>
      <Text style={styles.isLoadingText}>An error occurred while fetching the user data</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.countText}>Stack2</Text>
        <Button
          title="Go to Stack 3"
          onPress={() => navigation.navigate('Stack3')}
        />
      </View>
      <Text style={styles.header1}>React Query Example</Text>
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

export default Stack2;
