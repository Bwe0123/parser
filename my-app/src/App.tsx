import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    const url = 'https://status.plaid.com/api/v2/incidents.json';
    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setIncidents(data.incidents);
        } else {
          console.error('Ошибка при получении данных:', response.status);
        }
      })
      .catch(error => {
        console.error('Произошла ошибка при запросе:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Список инцидентов</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>{incident.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
