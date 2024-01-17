import React from 'react';
import { View, Text, Button } from 'react-native';

const Stack3 = ({navigation}) => {
  return (
    <View>
      <Text>Stack3</Text>
      <Button
        title="Go to Stack 4"
        onPress={() => navigation.navigate('Stack4')}
      />
    </View>
  );
}

export default Stack3;
