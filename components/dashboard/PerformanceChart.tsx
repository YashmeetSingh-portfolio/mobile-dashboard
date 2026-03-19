//this is the performance chart component for the dashboard screen.

import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from '../../constants/Colors';
import { router } from 'expo-router';

export default function PerformanceChart() {
  return (
    <Pressable style={styles.container} onPress={() => router.push('/details')}>
      <Text style={styles.title}>Performance Stats</Text>
      
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [{ data: [20, 45, 28, 80] }]
        }}
        width={Dimensions.get("window").width - 70} 
        height={180}
        chartConfig={{
          backgroundColor: Colors.surface,
          backgroundGradientFrom: Colors.surface,
          backgroundGradientTo: Colors.surface,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(108, 92, 231, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(160, 164, 184, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: { r: "4", strokeWidth: "2", stroke: Colors.primary }
        }}
        bezier 
        style={styles.chart}
      />
      
      <Text style={styles.footer}>Tap to view detailed report →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: -15, 
  },
  footer: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'right',
  }
});