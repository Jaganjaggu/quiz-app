export const quiz = {
    topic: 'Javascript',
    level: 'beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
        {
            question: 'Which of the following is a valid way to comment out a single line in JavaScript?',
            choices: ['// This is a comment', '/* This is a comment */', '-- This is a comment', '<!-- This is a comment -->'],
            type: 'MCQs',
            correctAnswer: '// This is a comment',
        },
        {
            question: 'What does the JavaScript `typeof` operator return for an array?',
            choices: ['Array', 'object', 'Array and object', 'String'],
            type: 'MCQs',
            correctAnswer: 'object',
        },
        {
            question: 'Which method is used to remove the last element from an array in JavaScript?',
            choices: ['pop()', 'remove()', 'delete()', 'splice()'],
            type: 'MCQs',
            correctAnswer: 'pop()',
        },
        {
            question: 'What is the purpose of the JavaScript `typeof` operator?',
            choices: ['To check if a variable is defined', 'To return the data type of a value', 'To perform mathematical operations', 'To define a new variable'],
            type: 'MCQs',
            correctAnswer: 'To return the data type of a value',
        },
        {
            question: 'Which of the following is not a JavaScript loop statement?',
            choices: ['for', 'if', 'while', 'do...while'],
            type: 'MCQs',
            correctAnswer: 'if',
        },
        {
            question: 'In JavaScript, what will be the result of the expression `3 + "3"`?',
            choices: ['6', '33', 'NaN', 'Error'],
            type: 'MCQs',
            correctAnswer: '33',
        },
        {
            question: 'Which JavaScript method is used to join the elements of an array into a string?',
            choices: ['join()', 'concat()', 'merge()', 'combine()'],
            type: 'MCQs',
            correctAnswer: 'join()',
        },
        {
            question: 'Which function is used to serialize an object into a JSON string in Javascript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'stringify()',
        },
        {
            question: 'Which of the following keywords is used to define a variable in Javascript?',
            choices: ['var', 'let', 'var and let', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'var and let',
        },
        {
            question:
                'Which of the following methods can be used to display data in some form using Javascript?',
            choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
            type: 'MCQs',
            correctAnswer: 'All of the above',
        },

    ]
}

