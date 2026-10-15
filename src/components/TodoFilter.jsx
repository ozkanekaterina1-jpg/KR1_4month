const filters = [
  { label: 'Все', value: 'all' },
  { label: 'Активные', value: 'active' },
  { label: 'Выполненные', value: 'completed' },
]

export function TodoFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-1 mb-4">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          onClick={() => onFilterChange(value)}
          className={`flex-1 py-1.5 text-sm rounded-md font-medium transition-colors ${
            activeFilter === value
              ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
