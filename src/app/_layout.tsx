import '../global.css';
import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1E293B' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Repositórios',
          }}
        />
        <Stack.Screen
          name="add"
          options={{
            title: 'Adicionar Repositório',
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}