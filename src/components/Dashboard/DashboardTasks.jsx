'use client';

import React, { useState, useEffect } from 'react';

const initialTasks = [
  { id: 1, title: 'Review sales report', completed: false, priority: 'High', due: 'Today' },
  { id: 2, title: 'Update product listings', completed: true, priority: 'Medium', due: 'Tomorrow' },
  { id: 3, title: 'Fix bug in checkout flow', completed: false, priority: 'High', due: 'This Week' },
  { id: 4, title: 'Plan marketing campaign', completed: false, priority: 'Low', due: 'Next Week' },
];

const priorityColors = {
  High: 'bg-black',
  Medium: 'bg-black',
  Low: 'bg-black',
};

const dueOptions = ['Today', 'Tomorrow', 'This Week', 'Next Week'];

const DashboardTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCompleted, setFilterCompleted] = useState('All');

  // New task form states
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [newDue, setNewDue] = useState('Today');
  const [adding, setAdding] = useState(false);

  // Simulate fetching tasks from backend/localStorage on mount
  useEffect(() => {
    setLoading(true);
    const stored = localStorage.getItem('dashboardTasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      setTasks(initialTasks);
    }
    setLoading(false);
  }, []);

  // Persist tasks to localStorage on change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('dashboardTasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  // Toggle completion
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Add new task
  const addTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setAdding(true);
    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      priority: newPriority,
      due: newDue,
      completed: false,
    };
    setTimeout(() => {
      setTasks((prev) => [newTask, ...prev]);
      setNewTitle('');
      setNewPriority('Medium');
      setNewDue('Today');
      setAdding(false);
    }, 500); // simulate save delay
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  // Filter tasks by selected filters
  const filteredTasks = tasks.filter((task) => {
    if (filterPriority !== 'All' && task.priority !== filterPriority) return false;
    if (filterCompleted !== 'All') {
      if (filterCompleted === 'Completed' && !task.completed) return false;
      if (filterCompleted === 'Incomplete' && task.completed) return false;
    }
    return true;
  });

  if (loading) {
    return (
      <section className="w-full bg-white flex justify-center px-4 py-10" aria-busy="true">
        <div className="w-full max-w-[1000px]">
          <h2 className="text-2xl font-bold text-black mb-6 animate-pulse">Tasks</h2>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-white rounded animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white flex justify-center px-4 py-10">
      <div className="w-full max-w-[1000px]">
        <h2 className="text-2xl font-bold text-black mb-6">Tasks</h2>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-700">
          <div>
            <label htmlFor="priorityFilter" className="mr-2 font-medium">Priority:</label>
            <select
              id="priorityFilter"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="bg-white text-gray-900 px-2 py-1 rounded cursor-pointer"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label htmlFor="completedFilter" className="mr-2 font-medium">Status:</label>
            <select
              id="completedFilter"
              value={filterCompleted}
              onChange={(e) => setFilterCompleted(e.target.value)}
              className="bg-white text-gray-900 px-2 py-1 rounded cursor-pointer"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Incomplete</option>
            </select>
          </div>

          <button
            onClick={clearCompleted}
            disabled={!tasks.some((t) => t.completed)}
            className="ml-auto bg-black text-black px-3 py-1.5 rounded font-semibold hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-disabled={!tasks.some((t) => t.completed)}
          >
            Clear Completed
          </button>
        </div>

        {/* Add New Task */}
        <form
          onSubmit={addTask}
          className="flex flex-col sm:flex-row items-center gap-3 mb-6"
          aria-label="Add new task form"
        >
          <input
            type="text"
            aria-label="New task title"
            placeholder="New task title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 bg-white rounded px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-black"
            disabled={adding}
            required
          />
          <select
            aria-label="Priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            className="bg-white rounded px-3 py-2 text-gray-900 cursor-pointer"
            disabled={adding}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select
            aria-label="Due date"
            value={newDue}
            onChange={(e) => setNewDue(e.target.value)}
            className="bg-white rounded px-3 py-2 text-gray-900 cursor-pointer"
            disabled={adding}
          >
            {dueOptions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={adding || !newTitle.trim()}
            className="bg-black text-black px-5 py-2 rounded font-semibold hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {adding ? 'Adding...' : 'Add Task'}
          </button>
        </form>

        {/* Tasks List */}
        <ul
          className="bg-white rounded-xl p-5 shadow space-y-4 max-h-[350px] overflow-y-auto"
          aria-live="polite"
          aria-relevant="additions removals"
        >
          {filteredTasks.length === 0 && (
            <li className="text-gray-600 text-center italic select-none">No tasks match the filters.</li>
          )}

          {filteredTasks.map(({ id, title, completed, priority, due }) => (
            <li
              key={id}
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-gray-500 transition select-text ${
                completed ? 'opacity-60 line-through' : ''
              }`}
              onClick={() => toggleTask(id)}
              title={`Priority: ${priority} | Due: ${due}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleTask(id);
                }
              }}
              role="checkbox"
              aria-checked={completed}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => toggleTask(id)}
                  className="w-5 h-5 cursor-pointer accent-black"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Mark task "${title}" as ${completed ? 'incomplete' : 'complete'}`}
                />
                <span>{title}</span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold text-black ${
                    priorityColors[priority]
                  }`}
                >
                  {priority}
                </span>
                <span className="text-xs text-gray-600">{due}</span>
                <button
                  aria-label={`Delete task "${title}"`}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(id);
                  }}
                  className="ml-3 text-black hover:text-black transition"
                  title="Delete task"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DashboardTasks;
