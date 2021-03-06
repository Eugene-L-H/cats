const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunc) {

  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");
    if (!error) callbackFunc(data);
  });
};

const printBreed = (breed) => {
  console.log('Return Value: ', breed)
}

// we try to get the return value
breedDetailsFromFile('Bombay', printBreed);

