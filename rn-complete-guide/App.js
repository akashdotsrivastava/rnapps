import React, { useState } from 'react';
import { StyleSheet, 
         View, 
         FlatList,
         Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(({ id }) => id !== goalId )
    })
  }

  const cancelAddGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} cancelAddGoalHandler={cancelAddGoalHandler} />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} onDelete={removeGoalHandler.bind(this, itemData.item.id)}/>
        )}
        keyExtractor={(item, index) => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
