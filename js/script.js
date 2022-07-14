const runBtn = document.getElementById(`run-btn`);
const textArea = document.getElementById(`code`);
const result = document.getElementById(`result`);

runBtn.addEventListener(`click`, () => {
    const theCode = textArea.value;
    result.contentWindow.document.body.innerHTML = ``;
    result.contentWindow.document.write(theCode);
});