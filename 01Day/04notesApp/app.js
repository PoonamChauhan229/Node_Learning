
const chalk=require('chalk')
console.log(chalk.green('Success'))
console.log(chalk.blue('Success'))
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.yellow('Hello', chalk.underline.bgRed('world') + '!'));
console.log(chalk.green.inverse('Success'))
console.log(chalk.bgRed.inverse('Success'))
console.log(chalk.bgRed.hidden('Success'))
console.log(chalk.hidden('Success'))
console.log(chalk.bgRed.strikethrough('Success'))
console.log(chalk.bgRed.dim('Success'))
console.log(chalk.bgRed.bold('Success'))
