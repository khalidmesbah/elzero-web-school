const runBtn = document.getElementById(`run-btn`);
const textArea = document.getElementById(`code`);
const result = document.getElementById(`result`);

textArea.addEventListener(`input`, () => {
    const theCode = textArea.value;
    result.contentWindow.document.body.innerHTML = theCode;
});