import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './Group.css';
import { FaArrowRight } from 'react-icons/fa';
function Group({ index, group, onDelete, onUpdate }) {
  const handleChange = (e, field) => {
    const updatedGroup = { ...group, [field]: parseInt(e.target.value) };
    onUpdate(updatedGroup);
  };

  return (
    <div className="group">
      <input
        type="number"
        value={group.from}
        onChange={(e) => handleChange(e, 'from')}
        min={1}
        max={group.to - 1}
        placeholder="From"
      />
       <FaArrowRight className="delete-icon"/>
      <input
        type="number"
        value={group.to}
        onChange={(e) => handleChange(e, 'to')}
        min={group.from + 1}
        max={10}
        placeholder="To"
      />
      <FaTrash onClick={onDelete} className="delete-icon" title="Delete Group" />
    </div>
  );
}

export default Group;
