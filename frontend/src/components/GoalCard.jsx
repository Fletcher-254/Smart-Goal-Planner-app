function GoalCard({ goal }) {
  const { name, targetAmount, savedAmount, category, deadline } = goal;

  const progress = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(1);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">Category: {category}</p>
      <p className="text-sm text-gray-500">Deadline: {deadline}</p>

      <div className="my-2">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-700 mt-1">
          {savedAmount} / {targetAmount} saved ({progress}%)
        </p>
      </div>
    </div>
  );
}

export default GoalCard;
