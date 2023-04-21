// task 1

class Person {
  constructor(firstName, lastName, gender, maritalStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }

  toLocaleString() {
    let title = '';

    if (this.gender === 'male') {
      title = 'Mr.';
    } else if (this.maritalStatus === 'married') {
      title = 'Mrs.';
    } else if (this.maritalStatus === 'single') {
      title = 'Miss.';
    }

    return `${title} ${this.lastName}`;
  }
}
const person1 = new Person('Tom', 'Helf', 'male', 'married');
console.log(person1.toLocaleString());

const person2 = new Person('Maria', 'Davis', 'female', 'single');
console.log(person2.toLocaleString()); 

const person3 = new Person('Max', 'Lucas', 'male', 'single');
console.log(person3.toLocaleString());

// task 2

function convertToThaiNumeral(number) {
  const numerals = {
    0: '๐',
    1: '๑',
    2: '๒',
    3: '๓',
    4: '๔',
    5: '๕',
    6: '๖',
    7: '๗',
    8: '๘',
    9: '๙',
  };

  return number.toString().replace(/\d/g, digit => numerals[digit]);
}

function convertToArabicNumeral(number) {
  const numerals = {
    0: '٠',
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
  };

  return number.toString().replace(/\d/g, digit => numerals[digit]);
}

function convertToEnglishNumeral(number) {
  return number;
}

function printNumberInDifferentNumerals(number) {
  console.log('English Numeral:', convertToEnglishNumeral(number));
  console.log('Arabic Numeral:', convertToArabicNumeral(number));
  console.log('Thai Numeral:', convertToThaiNumeral(number));
}
printNumberInDifferentNumerals(12345);

// task 3

const dateFR = new Date();
const optionsFR = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(dateFR.toLocaleDateString('fr-FR', optionsFR));

// Китай
const dateCN = new Date();
const optionsCN = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
console.log(dateCN.toLocaleDateString('zh-CN', optionsCN));

// Єгипет
const dateEG = new Date();
const optionsEG = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
console.log(dateEG.toLocaleDateString('ar-EG', optionsEG));

// Таїланд
const dateTH = new Date();
const optionsTH = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
console.log(dateTH.toLocaleDateString('th-TH-u-nu-thai', optionsTH));

// task 4

function compareText(text1, text2, ignoreCase = false) {
  if (ignoreCase) {
    text1 = text1.toLowerCase();
    text2 = text2.toLowerCase();
  }
  
  if (text1 === text2) {
    console.log("The texts are equal.");
  } else {
    console.log("The texts are not equal.");
  }
}

compareText("Hello", "hello", true);
compareText("Hello", "hello", false);

// task 5

const locales = {
  en: {
    format: '{0} has {1} messages',
    positions: [0, 1],
  },
  fr: {
    format: 'Il y a {1} messages pour {0}',
    positions: [1, 0],
  },
};

function messageFormat(locale, ...args) {
  const { format, positions } = locales[locale];
  return format.replace(/\{(\d+)\}/g, (match, index) => args[positions[index]]);
}

console.log(messageFormat('en', 'John', 5));
console.log(messageFormat('fr', 'John', 5));

// task 6
class PaperSize {
  constructor(locale) {
    this.locale = locale;
    this.defaultSize = 'A4';
    this.units = 'mm';
    this.sizes = {
      'A0': { width: 841, height: 1189 },
      'A1': { width: 594, height: 841 },
      'A2': { width: 420, height: 594 },
      'A3': { width: 297, height: 420 },
      'A4': { width: 210, height: 297 },
      'A5': { width: 148, height: 210 },
      'A6': { width: 105, height: 148 },
      'A7': { width: 74, height: 105 },
      'A8': { width: 52, height: 74 },
      'A9': { width: 37, height: 52 },
      'A10': { width: 26, height: 37 }
    };
  }
  
  getSize(size) {
    if (this.sizes.hasOwnProperty(size)) {
      return this.sizes[size];
    } else {
      return this.sizes[this.defaultSize];
    }
  }
  
  getDimensions(size) {
    const sizeObj = this.getSize(size);
    const width = sizeObj.width;
    const height = sizeObj.height;
    return `${width} x ${height} ${this.units}`;
  }
}

const paperSize = new PaperSize('en-US');
console.log(paperSize.getDimensions('A4'));

const paperSize2 = new PaperSize('fr-FR');
console.log(paperSize2.getDimensions('A4'));

const paperSize3 = new PaperSize('my-MM');
console.log(paperSize3.getDimensions('A4'));