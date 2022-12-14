const InputView = require('./InputView.js');
const getComputerNumbers = require('./ComputerRandomNumbers');

class App {
  play() {
    InputView.printStartGame();
    getComputerNumbers();
  }
}

const app = new App();
app.play();
module.exports = App;
