//this is the TaskItem component it displays the task title and other minor details for the active tasks

import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons'; // Built into Expo
import { Pressable } from 'react-native';
import { router } from 'expo-router';
interface TaskProps {
  title: string;
  category: string;
  isCompleted: boolean;
}

export default function TaskItem({ title, category, isCompleted }: TaskProps) {
  return (
    <Pressable 
      onPress={() => router.push({
        pathname: "/taskDetail",
        params: { title, category, status: isCompleted ? 'Completed' : 'Pending' }
      })}
      style={styles.container}
    >
    <View style={styles.container}>
      <View style={[styles.statusDot, { backgroundColor: isCompleted ? Colors.success : Colors.primary }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={Colors.textSecondary} />
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    
    backgroundColor: Colors.surfaceHighlight,
    padding: 8,
    borderRadius: 12,
    marginBottom: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    marginTop:11,
    color: Colors.text,
    fontSize: 15,
    fontWeight: '500',
  },
  category: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
});