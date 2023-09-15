//Unfortunately I didn't get this task. The description was not enough.

function delayLog(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

delayLog("First message", 1000)
  .then(() => delayLog("Second message", 500))
  .then(() => delayLog("Third message", 200))
  .then(() => delayLog("Fourth message", 1000))
  .catch((error) => {
    console.error("An error occurred:", error);
  });

//logs:
//"First message"
//"Second message"
//"Third message"
//"Fourth message"
