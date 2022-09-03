"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
const cliFormat = require('cli-format');
const data = {
    name: chalk.bold.greenBright('Sahaj Srivastava'.padStart(34)),
    description: chalk.italic.green(`/* Most of days, I'm far from being productive */`.padStart(51)),
    work: `${chalk.white('Frontend Developer Intern at')} ${chalk
        .hex('#2b82b2')
        .bold('Gamezop')}`,
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('mad1add'),
    github: chalk.gray('https://github.com/') + chalk.green('Sahaj-Srivastava24'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('sahaj-srivastava24'),
    web: chalk.cyan('https://mad1ad.netlify.app/'),
    npx: chalk.red('npx') + ' ' + chalk.white('mad1ad'),
    infoText: `${chalk.grey.italic(`I am currently looking for opportunities. I am always open for questions for just a random hi. I'll get back to you as soon as I can. Also, you can use `)}${chalk.reset.grey.bold('CTRL + Click')} ${chalk.italic.grey('to follow the links.')}
  `,
    labelWork: chalk.white.bold('Work:'.padStart(10)),
    labelTwitter: chalk.white.bold('Twitter:'.padStart(10)),
    labelGitHub: chalk.white.bold('GitHub:'.padStart(10)),
    labelLinkedIn: chalk.white.bold('LinkedIn:'.padStart(10)),
    labelWeb: chalk.white.bold('Web:'.padStart(10)),
    labelCard: chalk.white.bold('Card:'.padStart(10)),
};
const formattedMessage = cliFormat.wrap(chalk.italic.grey(data.infoText), {
    width: 55,
    justify: true,
});
const dataString = `
  ${data.name} 
  ${data.description}

  ${data.labelWork}  ${data.work}
  
  ${data.labelGitHub}  ${data.github}
  ${data.labelLinkedIn}  ${data.linkedin}
  ${data.labelTwitter}  ${data.twitter}
  ${data.labelWeb}  ${data.web}lhj
  ${data.labelCard}  ${data.npx}
  
  ${formattedMessage}
`;
exports.default = dataString;
//# sourceMappingURL=info.js.map