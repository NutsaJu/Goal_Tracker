import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [GoalArr, setGoalArr] = useState([]);

  function add_New_Goal(enteredText) {
    if (enteredText && enteredText.trim()) {
      setGoalArr((currGoals) => [
        ...currGoals,
        { text: enteredText, id: Math.random().toString() },
      ]);
      setIsVisible(false);
    }
  }

  function delete_items_handler(id) {
    setGoalArr((currGoals) => {
      return currGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setIsVisible(true)}
        />
        <GoalInput
          addnewgoal={add_New_Goal}
          visible={isVisible}
          handle_cancel={() => setIsVisible(false)}
        />
        <View style={styles.ListOfGoal}>
          <FlatList
            data={GoalArr}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  value={itemData.item.text}
                  id={itemData.item.id}
                  deleteItems={delete_items_handler}
                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  ListOfGoal: {
    flex: 5,
    marginTop: 20,
  },
});
