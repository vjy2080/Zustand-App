import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './navigation/MainStackNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './i18n';
import Language from './screen/Langauge';

export default function App() {
  // const queryClient = new QueryClient()
  return (
    //   <QueryClientProvider client={queryClient}>
    //     <NavigationContainer>
    //       <MainStackNavigation />
    //     </NavigationContainer>
    //   </QueryClientProvider>
    <Language />
  );
}
