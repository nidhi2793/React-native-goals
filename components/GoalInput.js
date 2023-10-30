import React from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function handleSubmit() {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <>
      <TextInput
        style={styles.textInput}
        value={enteredGoal}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
