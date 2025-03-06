import { useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const questions = [
    "Ти, як правило, завжди буваєш всім задоволений?",
    "Тобі іноді заважають заснути різні думки?",
    "Чи любиш ти жартувати над ким-небудь?",
    "Чи часто ти потребуєш допомоги інших хлопців?",
    "Чи часто у тебе міняється настрій?",
    "Як часто ти  відволікаєшся, коли робиш уроки?",
    "Як ти думаєш, тебе вважають веселою людиною?",
    "Чи траплялося тобі говорити про будь-кого погано?",
    "Тобі часом сняться страшні сни?",
    "Чи буває так, що іноді тебе майже все дратує?",
];

let counter = 0;
let questionIterator = 0;

const askQuestion = () => {
    Alert.alert(questions[questionIterator], "", [
        {
            text: "Ні",
            onPress: () => askQuestions(),
        },
        {
            text: "Іноді",
            onPress: () => askQuestions(0.5),
        },
        {
            text: "Так",
            onPress: () => askQuestions(1),
        },
    ]);
};

const defineTemperamentByCount = () => {
    let result = "Неможливо визначити";

    if (counter > 0 && counter < 2) {
        result = "Інтроверт";
    } else if (counter > 2 && counter < 5) {
        result = "Флегматик-інтроверт";
    } else if (counter > 5 && counter < 7) {
        result = "Холерик-інтроверт";
    } else if (counter > 7 && counter < 10) {
        result = "Меланхолік-інтроверт";
    }

    return result;
};

const askQuestions = (addition = 0) => {
    if (questionIterator < questions.length) {
        askQuestion();

        counter += addition;
        questionIterator++;
    } else {
        const temperament = defineTemperamentByCount();

        Alert.alert("Тест завершено!", `Ви - ${temperament}`, [{ text: "Газад" }]);
    }
};

const startTest = () => {
    askQuestions();
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Визначте свій темперамент</Text>
            <Pressable onPress={startTest}>
                <Text style={styles.btn}>Start</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#060b0c",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        margin: 10,
        padding: 10,
        fontSize: 24,
        fontWeight: 700,
        color: "#f0f2f2",
    },
    btn: {
        margin: 10,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#9ad9df",
        color: "#060b0c",
        borderRadius: 7,
    },
});
