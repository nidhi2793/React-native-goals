import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, removeGoalHandler }) => {
  return (
    <Pressable onPress={() => removeGoalHandler(item.id)}>
      <View style={styles.goalList}>
        <Text style={styles.goal}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goal: {
    color: "white",
  },
});
