import React, { useState } from "react";

// import { useDispatch } from "react-redux";

import Group from "./Group";
import StatusDisplay from "./StatusDisplay";
import { FaPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import "./GroupList.css";

function GroupList() {
  const initialGroup = { from: 1, to: 10 };
  const [groups, setGroups] = useState([initialGroup]);
  const [showStatus, setShowStatus] = useState(false);
  // const dispatch = useDispatch();

  const handleAddGroup = () => {
    const newGroup = { from: "", to: "" };
    setGroups([...groups, newGroup]);
  };

  const handleDeleteGroup = (index) => {
    const updatedGroups = [...groups];
    updatedGroups.splice(index, 1);
    setGroups(updatedGroups);
  };

  const handleUpdateGroup = (index, updatedGroup) => {
    const updatedGroups = [...groups];
    updatedGroups[index] = updatedGroup;
    setGroups(updatedGroups);
  };

  const handleToggleStatus = () => {
    setShowStatus((prevShowStatus) => !prevShowStatus);
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
          {groups.length > 0 && (
            <>
              {showStatus ? (
                <FaEyeSlash
                  onClick={handleToggleStatus}
                  className="icon"
                  title="Hide Status"
                />
              ) : (
                <FaEye
                  onClick={handleToggleStatus}
                  className="icon"
                  title="Show Status"
                />
              )}
            </>
          )}
        </div>
      </div>
      {showStatus && <StatusDisplay groups={groups} />}
    </div>
  );
}

export default GroupList;
