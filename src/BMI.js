import React, { useState } from 'react';
import './bmi.css';

const BMICalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState();
  const [msg, setMsg] = useState('');

  const reload = () =>{
    window.location.reload()
  }

  const handleCalculations = (e)=>{
    e.preventDefault()
  
  if(weight === 0 || height === 0){
    alert('Hello please enter a valid number')
  }else{
    let bmiFormular = (weight / (height * height)* 703);
    setBMI(bmiFormular.toFixed(2))
  }if(bmi < 25){
    setMsg('You are Underweight')
  }else if (bmi >= 25 || bmi <= 30){
    setMsg('you are healthy')
  }else{
    setMsg('You are unhelthy')
  }

}

  /*const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(calculatedBMI);
  };*/

  return (
    <div className= 'parent-container'>
       <div className= 'child-container'>
       <form onSubmit={handleCalculations}>
      <h2 style= {{position: 'relative', top: '-80px'}}>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Age (yrs)"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginBottom: '40px', padding: '8px', width: '100%' }}
      />
       <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ marginBottom: '40px', padding: '8px', width: '100%' }}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ marginBottom: '40px', padding: '8px', width: '100%' }}
      />
      <button onClick={handleCalculations} style={{position: 'relative', left: '-0px', padding: '10px 20px', cursor: 'pointer', margin: '0 20px'}}>
        Calculate BMI
      </button>
      <button onClick={reload} style={{position: 'relative',  padding: '10px 20px', cursor: 'pointer', margin: '0 20px'}}>
        Reload
      </button>
      {bmi && (
        <div style={{position: 'relative', marginTop: '20px', left: '-120px' }}>
          <h3>Your Age:{age}</h3>
          <h3>Your BMI is: {bmi}</h3>
          <p className= 'p-msg'>{msg}</p>
        </div>
      )}
      </form>
    </div>
    </div>
  );
};

export default BMICalculator;
