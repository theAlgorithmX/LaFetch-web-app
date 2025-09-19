// Filter Dropdown Component
const FilterDropdown = ({ title, options = [], isOpen, onToggle }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900"
    >
      {title}
      {/* <ChevronDown
        className={`w-4 h-4 transform transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      /> */}
    </button>
    {isOpen && (
      <div className="mt-3 space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">{option}</span>
          </label>
        ))}
      </div>
    )}
  </div>
);

export default FilterDropdown;
