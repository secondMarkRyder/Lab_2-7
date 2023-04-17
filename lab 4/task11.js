function isJSFile(filename) {
  return filename.endsWith('.js');
}

console.log(isJSFile('script.js'));
console.log(isJSFile('index.html'));