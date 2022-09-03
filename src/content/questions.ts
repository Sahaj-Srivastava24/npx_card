import chalk from 'chalk'
import open from 'open'
import download from 'download'
import { Answers, QuestionCollection } from 'inquirer'

const mailToMe = () => {
  open('mailto:srivastavasahaj24@gmail.com')
  console.log(`I'll try my best to get back to you.`)
}

const downloadResume = () => {
  const resumeUrl =
    'https://drive.google.com/uc?export=download&id=1lVGVl-GSAp0_Di1LwKCVqrb8S5eYeX7m'
  const fileDir = process.cwd()
  download(resumeUrl, fileDir).then(() => {
    console.log('File downloaded successfully!')
    open(`${fileDir}/resume_mad1ad.pdf`)
  })
}

const exitCLI = () => {
  console.log(chalk.green.bold('Hope to see you again.'))
}

const choices: Answers[] = [
  {
    name: 'Drop an e-mail.',
    value: mailToMe,
  },
  {
    name: 'Download my resume.',
    value: downloadResume,
  },
  {
    name: 'Exit..',
    value: exitCLI,
  },
]

/**
  Array for questions specified.
*/
const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you wanna do..?',
    choices,
  },
]

export default questions
