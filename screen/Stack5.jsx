import React from 'react';
import { View, Text, Button } from 'react-native';

const Stack5 = ({ navigation }) => {
  return (
    <View>
      <Text>Stack5</Text>
      <Button
        title="Go to Stack 1"
        onPress={() => navigation.navigate('Stack1')}
      />
    </View>
  );
}

export default Stack5;
