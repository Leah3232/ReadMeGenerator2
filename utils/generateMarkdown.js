// this is the function that returns a license badge based on which license is passed in //
// If there is no license, it will return an empty string //
function renderLicenseBadge(license) {
    switch(license) {
      case 'MIT':
         return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)` ;
      case "LGPLv3":
        return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)` ;
      default:
        return ` `;
    }
  }
  
  // this is the function that returns the license link //
  // If there is no license, it will return an empty string //
  function renderLicenseLink(license) {
    switch(license) {
      case 'MIT':
         return `(https://opensource.org/licenses/MIT)` ;
      case "LGPLv3":
        return `(https://www.gnu.org/licenses/lgpl-3.0)` ;
      default:
        return ` `;
    }
  }
  
// this is the function markdown for the README //
  function generateMarkdown(data) {
  
  
    // this is top to bottom of the page //the license badge, the table of contents along with their tag links & all the information near the bottom of the page //
    return `# ${data.projectName}
    
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Build](#build)
    - [License](#license)
    - [Contributions](#contributions)
    - [Acknowledgements](#Acknowledgements)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Description
    ${data.description}
    ## Installation
    To install this program and run it as intended, please use the following commands within your node.js server:
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Build
    ${data.build}
    ## License
    The licensing for this project is:
    [${data.license}]${renderLicenseLink(data.license)}
    ## Contributions
    Here is the list of individuals who have contributed to this program!
    ${data.contributions}
    ## Acknowledgements
    These sites helped contribute to the completion of this project:
    
    ${data.sites}
    
    ## Tests
    These are the tests that were done to the program:
    ${data.tests}

    ## Questions
    Contact me with any questions:
    - [Email](${data.email})
    - [Github](https://github.com/${data.username})
    
  `;
  }
  
  module.exports = generateMarkdown;