function findMostRepeated() {
    const array = document.getElementById('array').value.split(',').map(item => parseInt(item.trim()));
    if (!array.every(item => !isNaN(item))) {
        displayOutput('Ingrese solo números.');
        return;
    }
    const counts = {};
    let mostRepeated;
    let maxCount = 0;
    for (const num of array) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostRepeated = num;
        }
    }
    displayOutput(`Número más repetido: ${mostRepeated}`);
}

function findLetters() {
    const array = document.getElementById('array').value.split(',');
    const lettersArray = array.filter(item => isNaN(item) && typeof item === 'string');
    displayOutput(`Letras en el array: [${lettersArray.join(', ')}]`);
}

function findLargestNumber() {
    const array = document.getElementById('array').value.split(',').map(item => parseInt(item.trim()));
    if (!array.every(item => !isNaN(item))) {
        displayOutput('Ingrese solo números.');
        return;
    }
    const largestNumber = Math.max(...array);
    displayOutput(`Número más grande: ${largestNumber}`);
}

function findSmallestNumber() {
    const array = document.getElementById('array').value.split(',').map(item => parseInt(item.trim()));
    if (!array.every(item => !isNaN(item))) {
        displayOutput('Ingrese solo números.');
        return;
    }
    const smallestNumber = Math.min(...array);
    displayOutput(`Número más pequeño: ${smallestNumber}`);
}

function displayOutput(message) {
    document.getElementById('output').innerText = message;
}
