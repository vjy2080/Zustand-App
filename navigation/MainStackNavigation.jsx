import { createStackNavigator } from '@react-navigation/stack';
import Stack1 from '../screen/Stack1';

import Stack2 from '../screen/Stack2';
import Stack3 from '../screen/Stack3';
import Stack4 from '../screen/Stack4';
import Stack5 from '../screen/Stack5';
// import stack1 from '../screen/stack1';


const Stack = createStackNavigator();

function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack1" component={Stack1} />
      <Stack.Screen name="Stack2" component={Stack2} />
      <Stack.Screen name="Stack3" component={Stack3} />
      <Stack.Screen name="Stack4" component={Stack4} />
      <Stack.Screen name="Stack5" component={Stack5} />
    </Stack.Navigator>
  );
}

export default MainStackNavigation;