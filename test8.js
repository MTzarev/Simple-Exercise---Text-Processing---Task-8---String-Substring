function test8(wordToFind, text) {
    let textWords = text.toLowerCase().split(` `)
    if (textWords.includes(wordToFind.toLowerCase())) {
        console.log(wordToFind.toLowerCase());
    } else {
        console.log(`${wordToFind.toLowerCase()} not found!`);
    }
}
test8('javascript', 'JavaScradipt is the best programming javasdacript language');