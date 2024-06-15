import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup, deleteGroup, updateGroup } from '../actions/groupActions';
import Group from './Group';
import StatusDisplay from './StatusDisplay';
import { FaPlus, FaEye, FaEyeSlash } from 'react-icons/fa';
import './GroupList.css';

function GroupList() {
 const groups = useSelector(state => state.groups);
  const dispatch = useDispatch();
  const [showStatus, setShowStatus] = useState(false);

  const handleAddGroup = () => {
    dispatch(addGroup());
  };

  const handleDeleteGroup = (index) => {
    dispatch(deleteGroup(index));
  };

  const handleUpdateGroup = (index, group) => {
    dispatch(updateGroup(index, group));
  };

  const handleToggleStatus = () => {
    setShowStatus(prevShowStatus => !prevShowStatus);
  };

  return (
    <div className="container">
      <div className="group-list">
        {groups.map((group, index) => (
          <Group
            key={index}
            index={index}
            group={group}
            onDelete={() => handleDeleteGroup(index)}
            onUpdate={(updatedGroup) => handleUpdateGroup(index, updatedGroup)}
          />
        ))}
        <div className="icon-container">
          <FaPlus onClick={handleAddGroup} className="icon" title="Add Group" />
          {showStatus ? (
            <FaEyeSlash onClick={handleToggleStatus} className="icon" title="Hide Status" />
          ) : (
            <FaEye onClick={handleToggleStatus} className="icon" title="Show Status" />
          )}
        </div>
      </div>
      {showStatus && <StatusDisplay groups={groups} />}
    </div>
  );
}

export default GroupList;
