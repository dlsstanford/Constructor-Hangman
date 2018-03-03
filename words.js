function hangmanWord() {
    var words = ["Moscow", "Goodnight", "Lamborghini","Golden State Warriors","Spongebob"];    
    var splitWord = [];
this.wordGenerate = function() {
    // pick word from array
    this.word = words[Math.floor(Math.random() * words.length)]
// for loop splits word into individual letters
 for(i=0;i<this.word.length;i++) {
  letters = this.word.charAt(i);
  splitWord.push(letters);
 }
    console.log(splitWord);
}
this.hideWord = function() {

}

}

module.exports = hangmanWord;