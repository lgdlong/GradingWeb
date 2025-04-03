function generateCode() {
    const count = parseInt(document.getElementById('questionCount').value);
    if (isNaN(count) || count < 1) {
        alert('Vui lòng nhập số lớn hơn 0');
        return;
    }

    let code = '';
    for (let i = 1; i <= count; i++) {
        code += `${i}. \n`;
    }

    document.getElementById('output').textContent = code;

    // Toggle copy button visibility
    const copyButton = document.querySelector('.copy-btn');
    copyButton.style.display = code.trim() ? 'block' : 'none';
}

function copyToClipboard() {
    const output = document.getElementById('output').textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function calculateScore() {
    const inputText = document.getElementById('input-text').value;
    const questionCount = parseInt(document.getElementById('questionCount').value);

    if (!inputText || isNaN(questionCount) || questionCount < 1) {
        alert('Vui lòng nhập số lượng câu hỏi hợp lệ và chuỗi câu trả lời');
        return;
    }

    const correctAnswers = (inputText.match(/\+/g) || []).length; // Count '+' symbols
    const questionNumber = (inputText.match(/\./g) || []).length; // Count '+' symbols
    const score = (correctAnswers / questionNumber) * 10; // Calculate score on base 10

    document.getElementById('score').innerHTML = `Điểm của bạn: <b>${score.toFixed(2)}</b>`;
}