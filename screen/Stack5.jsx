import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStore } from './UseStore';

const Stack5 = ({ navigation }) => {

  const bears = useStore((state) => state.bears);

  return (
    <View>
      <Text>Stack5</Text>
      <Button
        title="Go to Stack 1"
        onPress={() => navigation.navigate('Stack1')}
      />
      <View style={{ marginVertical: 30, alignItems: 'center' }}>
        <Text style={{ marginVertical: 20,fontSize:35 }}>
          {bears}
        </Text>
      </View>
    </View>
  );
}

export default Stack5;
