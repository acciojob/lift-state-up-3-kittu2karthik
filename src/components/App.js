import React, { useState } from "react";
import selectedOption from "./selectedOption";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

    function handleSelectedOption(option){
      setSelectedOption(option)
    }


  return (
    <div className="parent">
      <h1>Parent Component</h1>

        <div>
          <ChildComponent1 onSelectedOption={handleSelectedOption} />
          <ChildComponent2 onSelectedOption={handleSelectedOption} />
        </div>

        <p>Selected Option: {selectedOption}</p>
     
    </div>
  );
};

export default App;
