import { writable, derived } from 'svelte/store';

export interface TestQuestion {
    id: number;
    text: string;
}

export interface TestState {
    currentQuestion: number;
    score: number;
    isCompleted: boolean;
    answers: boolean[];
}

const questions: TestQuestion[] = [
    {
        id: 1,
        text: "Cuando leo un ritmo nuevo, tengo que ir muy despacio y contar cada tiempo para entenderlo."
    },
    {
        id: 2,
        text: "Si practico con metrónomo, a veces me apuro o me atraso y pierdo el pulso."
    },
    {
        id: 3,
        text: "Si la partitura tiene muchas figuras o silencios seguidos, me pierdo y tengo que volver al principio."
    },
    {
        id: 4,
        text: "Puedo tocar un ritmo si lo escucho, pero me cuesta leerlo directamente desde la partitura."
    },
    {
        id: 5,
        text: "Evito estudiar partes rítmicamente densas porque siento que me voy a trabar."
    }
];

function createTestStore() {
    const initialState: TestState = {
        currentQuestion: 0,
        score: 0,
        isCompleted: false,
        answers: []
    };

    const { subscribe, set, update } = writable<TestState>(initialState);

    return {
        subscribe,
        answerYes: () => update(state => {
            const newAnswers = [...state.answers, true];
            const newScore = state.score + 1;
            const newQuestion = state.currentQuestion + 1;
            const completed = newQuestion >= questions.length;

            return {
                ...state,
                score: newScore,
                currentQuestion: newQuestion,
                answers: newAnswers,
                isCompleted: completed
            };
        }),
        answerNo: () => update(state => {
            const newAnswers = [...state.answers, false];
            const newQuestion = state.currentQuestion + 1;
            const completed = newQuestion >= questions.length;

            return {
                ...state,
                currentQuestion: newQuestion,
                answers: newAnswers,
                isCompleted: completed
            };
        }),
        reset: () => set(initialState)
    };
}

export const testStore = createTestStore();
export { questions };

export const progress = derived(
    testStore,
    $testStore => {
        return {
            current: $testStore.currentQuestion + 1,
            total: questions.length,
            percentage: (($testStore.currentQuestion + 1) / questions.length) * 100
        };
    }
);
