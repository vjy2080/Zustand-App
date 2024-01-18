import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './navigation/MainStackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
