import React from 'react';
import { View, Text, Button } from 'react-native';

const Stack2 = ({navigation}) => {
  return (
    <View>
      <Text>Stack2</Text>
      <Button
        title="Go to Stack 3"
        onPress={() => navigation.navigate('Stack3')}
      />
    </View>
  );
}

export default Stack2;
