import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StatusDisplay.css';
import { FaCheck } from 'react-icons/fa';
function StatusDisplay({ groups }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const results = await Promise.all(
          groups.flatMap(group =>
            Array.from({ length: group.to - group.from + 1 }, (_, i) =>
              axios.get(`https://jsonplaceholder.typicode.com/todos/${group.from + i}`)
                .then(response => response.data)
                .catch(error => null)
            )
          )
        );

        const validResults = results.filter(result => result !== null);
        setStatuses(validResults);
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    fetchStatuses();
  }, [groups]);

 
  const validateGroups = () => {
    const sortedGroups = [...groups].sort((a, b) => a.from - b.from);

  
    if (sortedGroups.length === 0 || sortedGroups[0].from !== 1 || sortedGroups[sortedGroups.length - 1].to !== 10) {
      return false;
    }

  
    for (let i = 1; i < sortedGroups.length; i++) {
      if (sortedGroups[i].from !== sortedGroups[i - 1].to + 1) {
        return false;
      }
    }

    for (let i = 1; i < sortedGroups.length; i++) {
      if (sortedGroups[i].from <= sortedGroups[i - 1].to) {
        return false;
      }
    }

    return true;
  };

  
  return (
    <div className="status-display">
      {validateGroups() ? (
        groups.map((group, index) => (
          <div key={index} className="status-group">
            <h3>Group {index + 1}: From {group.from} to {group.to}</h3>
            <ul>
              {statuses
                .filter(status => status.id >= group.from && status.id <= group.to)
                .map(status => (
                  <li key={status.id}>
                     {status.completed ? 'Yes' : 'No'}
                  </li>
                 
                ))}
             <FaCheck className="check-icon" /> </ul>
          </div>
        ))
      ) : (
        <div className="validation-error">
          Invalid groups configuration. Please adjust to meet the rules.
        </div>
      )}
       
    </div>
  );
}

export default StatusDisplay;
