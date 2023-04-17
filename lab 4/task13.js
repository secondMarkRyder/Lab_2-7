function changeWord(text, oldWord, newWord) {
  const words = text.split(" ");
  const changeWords = words.map(word => word === oldWord ? newWord : word);
  const changeText = changeWords.join(" ");
  console.log(changeText);
  return changeText;
}
changeWord("I am Anton", "Anton", "Andrea");