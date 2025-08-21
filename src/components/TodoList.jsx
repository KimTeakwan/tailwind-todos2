import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  const prefersReduced = useReducedMotion();

  if (todos.length === 0) {
    return (
      <ul className="mt-2">
        <li className="p-4 text-center border rounded-xl border-app bg-card text-muted">
          표시할 항목이 없습니다.
        </li>
      </ul>
    );
  }

  return (
    <motion.ul layout className="space-y-2">
      <AnimatePresence initial={false}>
        {todos.map((t) => (
          <TodoItem key={t.id}
            todo={t}
            onToggle={() => onToggle(t.id)}
            onDelete={() => onDelete(t.id)}
            prefersReduced={prefersReduced}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}