//this is the main dashboard screen 

import { View, ScrollView, StyleSheet, Text, Animated } from "react-native";
import { Colors } from "../constants/Colors";
import UserProfile from "../components/dashboard/UserProfile";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import TaskItem from "../components/dashboard/TaskItem";
import { useRef } from "react";
import { useEffect } from "react";
import { MOCK_TASKS } from "../constants/Tasks";
export default function DashboardScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <UserProfile />

          <PerformanceChart />

          <Text style={styles.sectionHeader}>Active Tasks</Text>
          {MOCK_TASKS.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              category={task.category}
              isCompleted={task.isCompleted}
            />
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  sectionHeader: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 10,
  }
});
