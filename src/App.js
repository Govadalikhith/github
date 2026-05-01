import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <form className="form">  

      <div className="input-group">  
        <label>Full Name</label>  
        <input type="text" placeholder="Enter your full name" />  
      </div>  

      <div className="input-group">  
        <label>Email Address</label>  
        <input type="email" placeholder="Enter your email" />  
      </div>  

      <div className="input-group">  
        <label>Password</label>  
        <input type="password" placeholder="Enter password" />  
      </div>  

      <div className="row">  
        <div className="input-group">  
          <label>Gender</label>  
          <div className="radio-group">  
            <label><input type="radio" name="gender" /> Male</label>  
            <label><input type="radio" name="gender" /> Female</label>  
          </div>  
        </div>  

        <div className="input-group">  
          <label>Course</label>  
          <select>  
            <option>Select</option>  
            <option>React</option>  
            <option>Node</option>  
            <option>Full Stack</option>  
          </select>  
        </div>  
      </div>  

      <div className="checkbox">  
        <input type="checkbox" />  
        <span>I agree to Terms & Conditions</span>  
      </div>  

      <button className="btn">Create Account</button>  

    </form>  
    </div>
  );
}

export default App;
