import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import "./App.css";


function Sample () {
  const { id, name } = useParams(); 
  const navigate = useNavigate();

  const goBack = () => {
    console.log("Go back")
    navigate("/")
  }

  useEffect(() => {
    if (id == 0) {
      navigate('/');
    }
  });

    return (
    <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Sample component</h1>
            </div>
            <div>
               Parameters passed: {id} and {name}
                <div>ID is not 0</div>
                <button onClick={goBack}>Go back</button>
            </div>
        </div>
      </div>
    );
}
export default Sample;