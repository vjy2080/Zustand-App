import React from 'react';
import { View, Text, Button } from 'react-native';
import { create } from 'zustand'
import { useStore } from './UseStore';




const Stack1 = ({ navigation }) => {
  const count = useStore((state) => state.count)
  const increasePopulation = useStore((state) => state.increasePopulation)

  return (
    <View>
      <Text>Stack1</Text>
      <Button
        title="Go to Stack 2"
        onPress={() => navigation.navigate('Stack2')}
      />
      <View style={{ marginVertical: 30, alignItems: 'center' }}>
        <Text style={{ marginVertical: 20, fontSize: 35 }}>
          {count}
        </Text>
        <Button
          title='one up'
          onPress={increasePopulation}
        />
      </View>
    </View>
  );
}

export default Stack1;
