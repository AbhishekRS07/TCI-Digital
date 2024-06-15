import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import './Group.css';

function Group({ index, group, onDelete, onUpdate }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...group, [name]: parseInt(value, 10) });
  };

  return (
    <div className="group">
      <input
        type="number"
        name="from"
        value={group.from}
        onChange={handleChange}
        placeholder="From"
      />
  <FaArrowRight  className="delete-icon"/> 
      <input
        type="number"
        name="to"
        value={group.to}
        onChange={handleChange}
        placeholder="To"
      />
      <FaTrash onClick={onDelete} className="delete-icon" title="Delete Group" />
    </div>
  );
}

export default Group; 
