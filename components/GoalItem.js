import { Text, View, StyleSheet, Pressable } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.UniqueGoal}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.deleteItems.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.PressedItem}
      >
        <Text style={{ color: "white", padding: 10 }}>{props.value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  UniqueGoal: {
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 6,
  },
  PressedItem: {
    opacity: 0.5,
  },
});
