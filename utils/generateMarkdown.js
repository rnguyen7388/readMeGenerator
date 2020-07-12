// function to generate markdown for README
function generateMarkdown(data) {
  let licenseLink = `https://img.shields.io/badge/license-${data.license}-blue.svg`
  return `# ${data.title}
## Description 
    ${data.description}
## Table of Contents
1.[Usage](#Usage)

2.[Contribution](#Contribution)
  
3.[Questions](#Questions)
## Installation Requirements
    ${data.installation}
## Usage
    ${data.usage}
## License
[![License](${licenseLink})](https://shields.io/)
## Contribution
    ${data.contributions}
## Questions

If you have any questions, please contact my GitHub(https://github.com/${data.username}) or send me an email at ${data.email}`;
};

module.exports = generateMarkdown;
