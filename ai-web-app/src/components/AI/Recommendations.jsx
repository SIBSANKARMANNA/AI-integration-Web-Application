// frontend/src/components/AI/Recommendations.js

// import React, { useEffect, useState } from 'react';
// import { getRecommendations } from '../../api/aiApi';
// import './Recommendations.css';

// const Recommendations = () => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [genre, setGenre] = useState('');
//   const [interests, setInterests] = useState('');

//   const handleFetchRecommendations = async () => {
//     const userPreferences = {
//       genre: genre || 'technology', // Use default if empty
//       interests: interests.split(',').map((interest) => interest.trim()), // Split comma-separated interests
//     };

//     try {
//       const data = await getRecommendations({userPreferences});
//       setRecommendations(data.recommendations || []);
//       // console.log(data.recommendations);
//     } catch (error) {
//       console.error('Error fetching recommendations:', error);
//     }
//   };

//   return (
//     <div className="recommendations">
//       <h2>AI-Powered Recommendations</h2>
      
//       {/* User input form */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleFetchRecommendations();
//         }}
//       >
//         <label>
//           Genre:
//           <input
//             type="text"
//             value={genre}
//             onChange={(e) => setGenre(e.target.value)}
//             placeholder="e.g., technology"
//           />
//         </label>
//         <br />
//         <label>
//           Interests (comma-separated):
//           <input
//             type="text"
//             value={interests}
//             onChange={(e) => setInterests(e.target.value)}
//             placeholder="e.g., AI, Machine Learning"
//           />
//         </label>
//         <br />
//         <button type="submit">Get Recommendations</button>
//       </form>
//       <ul>
//         {recommendations.map((rec, index) => (
//           <li key={index}>{rec}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendations;


import React, { useState } from 'react';
import { getRecommendations } from '../../api/aiApi';
import './Recommendations.css';

const Recommendations = () => {
  const [genre, setGenre] = useState('');
  const [interests, setInterests] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetchRecommendations = async () => {
    const prompt = `Recommend something in the genre "${genre || 'technology'}" based on interests: ${interests || 'AI, machine learning'}`;

    setLoading(true);
    try {
      const data = await getRecommendations({ prompt });
      setRecommendation(data.recommendation || 'No recommendation received.');
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      setRecommendation('Failed to fetch recommendation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendations">
      <h2>AI-Powered Recommendations</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFetchRecommendations();
        }}
      >
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g., technology"
          />
        </label>
        <br />
        <label>
          Interests (comma-separated):
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., AI, Machine Learning"
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendation'}
        </button>
      </form>

      {/* Display recommendation */}
      {recommendation && (
        <div className="recommendation-output">
          <h4>Recommendation:</h4>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
