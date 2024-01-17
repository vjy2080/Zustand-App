import React from 'react';
import { View, Text, Button } from 'react-native';

const Stack4 = ({navigation}) => {
  return (
    <View>
      <Text>Stack4</Text>
      <Button
        title="Go to Stack 5"
        onPress={() => navigation.navigate('Stack5')}
      />
    </View>
  );
}

export default Stack4;
