import React, { useState, useEffect } from 'react';
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

    
        setStatuses(results.filter(result => result !== null));
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    fetchStatuses();
  }, [groups]);

  return (
    <div className="status-display">
      {groups.map((group, index) => (
        <div key={index} className="status-group">
          {/* <h3>Group {index + 1}: From {group.from} to {group.to}</h3> */}
          <ul>
            {statuses
              .filter(status => status.id >= group.from && status.id <= group.to)
              .map(status => (
                <li key={status.id}>
                ({status.id}) {status.completed.toString()}
                </li>
              ))}
         <FaCheck className="check-icon" />  </ul>
        </div>
      ))}
    </div>
  );
}

export default StatusDisplay;
