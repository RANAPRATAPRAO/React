import React,{useState} from 'react';

function useForm(initialValue) {
    const [values,setValues]=useState(initialValue);
    
    const handleChange=(e)=>{
        console.log(e);
        const {name, value}=e.target;
        
        setValues({
            ...values,
            [name]:value,
        });
    };
    
    const resetForm=()=>setValues(initialValue);
    
    
    return {values,handleChange,resetForm};
}


function App() {
    const {values,handleChange,resetForm}=useForm({
        name:'',
        email:'',
        password:'',
    });
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
        resetForm();
    };
    
    
    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">Submit</button>
    </form>

        
    );
}

export default App;












