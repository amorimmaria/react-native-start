import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { VStack } from 'react-native-flex-layout';
export default function App() {
  return (
    <VStack>
      <Text>Iniciando meu primeiro App com React Native</Text>
      <StatusBar style="auto" />
    </VStack>
  );
}
