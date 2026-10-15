export function TodoFooter({ activeCount, completedCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between mt-4 px-1 text-sm text-gray-400 dark:text-gray-500">
      <span>
        {activeCount} {activeCount === 1 ? 'задача' : activeCount < 5 ? 'задачи' : 'задач'} осталось
      </span>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={onClearCompleted}
          className="hover:text-red-400 transition-colors"
        >
          Очистить выполненные
        </button>
      )}
    </div>
  )
}
