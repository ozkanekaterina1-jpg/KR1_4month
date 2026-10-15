export function TodoInput({ value, onChange, onAdd }) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl shadow-md px-4 py-3 mb-4">
      <button
        type="button"
        onClick={onAdd}
        className="shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
        aria-label="Добавить задачу"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Что нужно сделать?"
        className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-base"
        aria-label="Новая задача"
      />
    </div>
  )
}
