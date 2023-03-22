import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export const GoalInput = (props) => {
  const [GoalText, setGoalText] = useState("");

  function goal_Input_Handler(enteredText) {
    setGoalText(enteredText);
  }

  function handle_add_new_goal() {
    props.addnewgoal(GoalText);
    setGoalText("");
  }

  function handle_modal_cancel() {
    props.handle_cancel();
    setGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.Keyboard}>
        <View style={styles.InputGoal}>
          <Image source={require("../assets/goal.png")} style={styles.Image} />
          <TextInput
            style={styles.GoalText}
            placeholder="Place Your Today Goal"
            onChangeText={goal_Input_Handler}
            value={GoalText}
          />
          <View style={styles.ButtonContainer}>
            <Button
              title="Add Goal"
              onPress={handle_add_new_goal}
              color="#b180f0"
            />
            <Button
              title="Cancel"
              onPress={handle_modal_cancel}
              color="#f31282"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  InputGoal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  Keyboard: {
    flex: 1
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  GoalText: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
    width: "90%",
    borderRadius: 6,
  },
  ButtonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 16,
  },
});
