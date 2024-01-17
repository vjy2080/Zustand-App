import React from 'react';
import { View, Text, Button } from 'react-native';
import { create } from 'zustand'
import { useStore } from './UseStore';




const stack1 = ({ navigation }) => {
  const bears = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)

  return (
    <View>
      <Text>stack1</Text>
      <Button
        title="Go to Stack 2"
        onPress={() => navigation.navigate('Stack2')}
      />
      <View style={{ marginVertical: 30, alignItems: 'center' }}>
        <Text style={{marginVertical:20,fontSize:35}}>
          {bears}
        </Text>
        <Button
          title='one up'
          onPress={increasePopulation}
        />
      </View>
    </View>
  );
}

export default stack1;
