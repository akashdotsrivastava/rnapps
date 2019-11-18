import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default GoalItem = props => {
                    return <TouchableOpacity onPress={props.onDelete} activeOpacity={0.8}>
                                <View style={styles.listItem}>
                                    <Text>{props.title}</Text>
                                </View>
                           </TouchableOpacity>
                    
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})