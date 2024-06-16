import React from 'react';
import { FaTrash, FaArrowRight } from 'react-icons/fa';
import './Group.css';

function Group({ index, group, onDelete, onUpdate }) {
  const handleChange = (e, field) => {
    const updatedGroup = { ...group, [field]: parseInt(e.target.value, 10) };
    onUpdate(updatedGroup);
  };

  return (
    <div className="group-container">
      <div className="group-number">Group {index + 1}</div>
      <input
        type="number"
        value={group.from}
        onChange={(e) => handleChange(e, 'from')}
        min={1}
        max={group.to - 1}
        placeholder="From"
        className="group-input"
      />
      <FaArrowRight className="arrow-icon" />
      <input
        type="number"
        value={group.to}
        onChange={(e) => handleChange(e, 'to')}
        min={group.from + 1}
        max={10}
        placeholder="To"
        className="group-input"
      />
      <FaTrash onClick={onDelete} className="delete-icon" title="Delete Group" />
    </div>
  );
}

export default Group;
