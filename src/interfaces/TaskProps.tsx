export interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

export interface TaskProps {
  tasks: Task[];
  onSetTasks: (newTasks: Task[]) => void;
}
