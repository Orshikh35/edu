"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

type Todo = {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
};

export default function DashboardClient({ session }: { session: Session }) {
  const user = session?.user;
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // ----------------------
  // GET TODOS
  // ----------------------
  const fetchTodos = async () => {
    setLoading(true);
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ----------------------
  // CREATE TODO
  // ----------------------
  const addTodo = async () => {
    if (!newTitle.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    setNewTitle("");
    fetchTodos();
  };

  // ----------------------
  // TOGGLE DONE
  // ----------------------
  const toggleTodo = async (id: string, done: boolean) => {
    await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !done }),
    });

    fetchTodos();
  };

  // ----------------------
  // DELETE TODO
  // ----------------------
  const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    fetchTodos();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 gap-6 px-6">
      {/* USER INFO */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome, {user?.name}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      {/* TODO INPUT */}
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add new todo..."
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add
        </button>
      </div>

      {/* TODO LIST */}
      <div className="w-full max-w-md">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center p-3 bg-white shadow rounded-md"
              >
                {/* LEFT: checkbox + title */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id, todo.done)}
                  />
                  <span
                    className={`${
                      todo.done ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>

                {/* RIGHT: delete button */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
