let defaults = { mode : "test", debugLevel : "error", logFolder : "root" };
let userSetting = {mode : "production", debugLevel : "trace" };
let sp = { ...defaults, ...userSetting };
console.log(sp);

let spl = Object.assign(defaults, userSetting);
console.log(spl);

let spli = [defaults, userSetting].reduce((acc, curr) => {
return { ...acc, ...curr }; });
console.log(spli);