import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import '../styles/DateRangeSelector.scss';

const dateRanges = [
  'Jan 2025 – Dec 2025',
  'Jan 2024 – Dec 2024',
  'Jan 2023 – Dec 2023',
  'Jan 2022 – Dec 2022'
];

const DateRangeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);

  const handleSelect = (range) => {
    setSelectedRange(range);
    setIsOpen(false);
  };

  return (
    <div className="date-dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <Calendar size={14} />
        <span>{selectedRange}</span>
        <ChevronDown size={16} />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {dateRanges.map((range) => (
            <li
              key={range}
              className={`dropdown-item ${range === selectedRange ? 'selected' : ''}`}
              onClick={() => handleSelect(range)}
            >
              {range}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DateRangeDropdown;
