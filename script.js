const dialogue = [
    "「マスター、お呼びですか？」",
    "「……今日はどうされました？」",
    "「私でよければ、お話をお聞きします。」"
];

let index = 0;
document.getElementById("textbox").addEventListener("click", () => {
    index++;
    if (index < dialogue.length) {
        document.getElementById("dialogue").innerText = dialogue[index];
    }
});
