
// This is the root/main layout for the app.
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { View } from 'react-native';

export default function RootLayout() {
  return (
   
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: Colors.background }, 
        }}
      >
        <Stack.Screen name="index" />
        
        <Stack.Screen name="taskDetail" />
      </Stack>
    </View>
  );
}