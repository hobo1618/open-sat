const N = 1000;
const arr = Array(N).fill(0);
const negativesQuestions = arr.map(() => {
    const signs = ["+", "-"];
    const signA = signs[Math.floor(Math.random() * 2)];
    const signB = signs[Math.floor(Math.random() * 2)];
    const a1 = Math.floor(Math.random() * 12);
    const b1 = Math.floor(Math.random() * 12);
    const a = a1 === 0 ? 1 : eval(`${signA}${a1}`)
    const b = b1 === 0 ? 1 : eval(`${signB}${b1}`)

    const ops = ["+", "-", "*", "/"];

    const op = ops[Math.floor(Math.random() * 4)];
    const idx = ops.indexOf(op);
    ops.splice(idx, 1);
    const question = `${a} ${op} ${b}`;
    const falseOp = ops[Math.floor(Math.random() * 3)];
    const correctOptionFloat = eval(question);
    const falseOptionFloat = eval(`${a} ${falseOp} ${b}`);

    const correctOption = parseFloat(correctOptionFloat.toFixed(2));
    const falseOption = parseFloat(falseOptionFloat.toFixed(2));
    
    const pos = Math.floor(Math.random() * 2);
    const options = pos === 0 ? [correctOption, falseOption] : [falseOption, correctOption];

    return ({
        question,
        options,
        answer: pos,
    })
});

export const negatives = {
    metadata: {
        title: "Speed Quiz",
        id: "1",
        description: "Add as many tasks as you can in 60 seconds",
        prompt: "Once you click start, you will be presented with a series of simple arithmetic problems to solve. Be careful of negative numbers!",
        date: "2021-09-30",
        tags: ["react", "valtio", "typescript"],
    },
    questions: negativesQuestions
}

