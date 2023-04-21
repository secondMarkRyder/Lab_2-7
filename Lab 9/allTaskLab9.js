// task 1

const logLevels = {
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4,
};

let logLevelThreshold = logLevels.WARNING;

function log(level, message) {
  if (logLevels[level] <= logLevelThreshold) {
    console.log(`${level}: ${message}`);
  }
}

function setLogLevelThreshold(level) {
  logLevelThreshold = logLevels[level];
}

module.exports = { log, setLogLevelThreshold };

// task 2

class Logger {
  static levels = {
    ERROR: 0,
    WARNING: 1,
    INFO: 2,
    DEBUG: 3,
  };

  constructor(level) {
    this.level = level;
  }

  log(level, message) {
    if (Logger.levels[level] <= this.level) {
      console.log(`${level}: ${message}`);
    }
  }

  error(message) {
    this.log('ERROR', message);
  }

  warn(message) {
    this.log('WARNING', message);
  }

  info(message) {
    this.log('INFO', message);
  }

  debug(message) {
    this.log('DEBUG', message);
  }
}

export default Logger;

import Logger from './logger.js';

const logger = new Logger(Logger.levels.INFO);

logger.debug('Debug message'); // не виведеться
logger.info('Info message'); // виведеться
logger.warn('Warning message'); // виведеться
logger.error('Error message'); // виведеться

//  task 3
npm install crypto-js

import CryptoJS from 'crypto-js';

// Повідомлення, яке треба зашифрувати
const message = 'Секретний текст';

// Ключ шифрування (32 байти або 256 біт)
const key = CryptoJS.enc.Hex.parse('00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF');

// Ініціалізаційний вектор (16 байт або 128 біт)
const iv = CryptoJS.enc.Hex.parse('000102030405060708090A0B0C0D0E0F');

// Шифруємо повідомлення з використанням AES-256 CBC з ключем та IV
const ciphertext = CryptoJS.AES.encrypt(message, key, { iv: iv });

// Розшифруємо повідомлення з використанням ключа та IV
const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), key, { iv: iv });

// Декодуємо байти у рядок
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

console.log(`Повідомлення: ${message}`);
console.log(`Зашифроване повідомлення: ${ciphertext.toString()}`);
console.log(`Дешифроване повідомлення: ${decryptedMessage}`);

// task 4

import { log, LOG_LEVELS } from './logging.js';

const CaesarCipher = {
  encrypt: function (plaintext, shift) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const code = plaintext.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        ciphertext += String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        ciphertext += String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        ciphertext += plaintext.charAt(i);
      }
    }
    return ciphertext;
  },

  decrypt: function (ciphertext, shift) {
    log(LOG_LEVELS.INFO, `Decrypting ciphertext "${ciphertext}" with shift ${shift}`);
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      const code = ciphertext.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        plaintext += String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        plaintext += String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      } else {
        plaintext += ciphertext.charAt(i);
      }
    }
    return plaintext;
  },
};

export default CaesarCipher;

import CaesarCipher from './caesar-cipher.js';

const plaintext = 'Hello, world!';
const shift = 3;

const ciphertext = CaesarCipher.encrypt(plaintext, shift);
console.log(`Ciphertext: ${ciphertext}`);

const decryptedText = CaesarCipher.decrypt(ciphertext, shift);
console.log(`Decrypted text: ${decryptedText}`);

// task 5

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomInts(length, min, max) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomInt(min, max));
  }
  return result;
}

export function getRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

import { getRandomInt, getRandomInts, getRandomString } from './random.js';

const randomInt = getRandomInt(0, 100);
const randomInts = getRandomInts(10, 0, 100);
const randomString = getRandomString(10);

console.log(randomInt);
console.log(randomInts);
console.log(randomString);