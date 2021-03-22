import React, { useState } from "react";
import styled from "styled-components";

const StepsAdd = ({ steps, setSteps }) => {
  const [stepName, setStepName] = useState("");
  const [stepDescription, setStepDescription] = useState("");
  const [stepTime, setStepTime] = useState(0);

  const clearInputs = () => {
    setStepName("");
    setStepTime(0);
    setStepDescription("");
  };

  const handleAddStep = () => {
    if (!stepName || !stepDescription || !stepTime) {
      alert("podaj wartosci");
    } else {
      const newStep = {
        name: stepName,
        time: stepTime,
        description: stepDescription,
        checked: false,

        image: "",
      };
      setSteps([...steps, newStep]);
      clearInputs();
    }
  };

  const handleStepName = (e) => {
    const newStepName = e.target.value;
    setStepName(newStepName);
  };

  const handleStepTime = (e) => {
    const newStepTime = e.target.value;
    setStepTime(newStepTime);
  };

  const handleStepDescription = (e) => {
    const newStepDescription = e.target.value;
    setStepDescription(newStepDescription);
  };

  return (
    <Container>
      <label>Nazwa kroku</label>
      <input
        type="text"
        name="name"
        value={stepName}
        onChange={handleStepName}
        placeholder={`Nazwa kroku`}
        required
      />
      <label>Czas potrzebny na wykonanie</label>
      <input
        type="number"
        name="time"
        value={stepTime}
        onChange={handleStepTime}
        placeholder={`Podaj czas kroku`}
        required
        min="0"
      />
      <label>Opis</label>
      <input
        type="textarea"
        name="description"
        value={stepDescription}
        onChange={handleStepDescription}
        placeholder={`Opis kroku`}
        required
      />
      <input type="button" onClick={handleAddStep} value={"Dodaj krok"}></input>
    </Container>
  );
};

export default StepsAdd;
const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
