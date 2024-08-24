const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

document.getElementById('submit-btn').addEventListener('click', function () {
    const direction = document.getElementById('direction').value;
    const text = document.getElementById('text').value.toLowerCase();
    let shift = parseInt(document.getElementById('shift').value);
    const resultElement = document.getElementById('output');

    if (direction === 'decode') {
        shift = -shift;
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)) {
            const position = alphabet.indexOf(char);
            const newPosition = position + shift;
            result += alphabet[newPosition];
        } else {
            result += char;
        }
    }

    resultElement.textContent = `Here's the ${direction}d result: ${result}`;
});
