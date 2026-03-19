//this exports data for tasks
export interface Task {
  id: string;
  title: string;
  category: string;
  isCompleted: boolean;
}

export const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Implement Dark Theme', category: 'UI/UX', isCompleted: true },
  { id: '2', title: 'Fix Navigation Flash', category: 'Engineering', isCompleted: true },
  { id: '3', title: 'SVG Graph Integration', category: 'Feature', isCompleted: false },
  { id: '4', title: 'Code Review & Refactor', category: 'Quality', isCompleted: false },
];