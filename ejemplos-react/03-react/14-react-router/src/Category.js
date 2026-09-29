import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'; 
import "./App.css";

function Category () {
  const { category } = useParams(); 
  const navigate = useNavigate();
  console.log(category)

  useEffect(() => {
    if (category === 'fail') {
      console.log('Bad category, redirecting');
      navigate('/');
    }
  });

  return (
    <div className="app">
      <div className="app-header">
          <div className="lapp-header-title">
            <h1>Category component</h1>
          </div>
          <div>
            This is the category page: {category}
          </div>
      </div>
    </div>
  );
}
export default Category;