// task 1

function invokeAfterDelay(delay, fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = fn();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}

invokeAfterDelay(1000, () => Math.floor(Math.random() * 11))
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
  
// task 2

function produceRandomAfterDelay(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 11);
      resolve(randomNum);
    }, delay);
  });
}

Promise.all([produceRandomAfterDelay(2000), produceRandomAfterDelay(3000)])
  .then((results) => {
    const sum = results.reduce((acc, cur) => acc + cur, 0);
    console.log(`The sum is ${sum}`);
  });
  
// task 3

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function timerr() {
  console.log('start');
  await sleep(1000);
  console.log('end');
}

someFunction();

// task 4

function getUser(id) {
  if (id < 0 || id > 3 || isNaN(id)) {
    return Promise.reject('User not found');
  }

  const user = {
    id: id,
    name: 'User' + id,
    age: 20 + id,
    city: 'City' + id,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
}

const promises = [];
for (let i = 0; i < 4; i++) {
  promises.push(getUser(i));
}

Promise.all(promises)
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.log(error);
  });

// task 5 

async function loadUsers(ids) {
  const promises = ids.map(id => getUser(id).catch(() => null));
  const users = await Promise.all(promises);
  const filteredUsers = users.filter(user => user !== null);
  if (filteredUsers.length !== ids.length) {
    throw new Error('Some users were not found');
  }
  return filteredUsers;
}

// task 6

function logCall(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      console.log(`[${time}] Calling ...`);
      callback();
      resolve();
    }, 1000);
  });
}

logCall(() => console.log('1 called'))
  .then(() => logCall(() => console.log('2 called')))
  .then(() => logCall(() => console.log('3 called')))
  .then(() => logCall(() => console.log('4 called')))
  .catch((error) => console.error(error));
  
// task 7

async function showUsers() {
  console.log('loading');
  try {
    const users = await loadUsers([0, 1, 2, 3]);
    console.log(users);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('loading finished');
  }
}

showUsers();