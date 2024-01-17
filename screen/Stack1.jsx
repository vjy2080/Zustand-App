import React from 'react';
import { View, Text, Button } from 'react-native';
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}))



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
      <View style={{ marginTop: 30 }}>
        <Text>
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
