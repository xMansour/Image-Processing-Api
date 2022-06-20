## Table of Contents
 1. [About The Project](#about)
 2. [Built With](#built-with)
 3. [Scripts](#scripts)
 4. [Usage](#usage)
 5. [Contact](#contact)

## About The Project<a id='about'></a>

This is the first project for Udacity's advanced web nanodegree.

## Built With<a id='built-with'>

**This project** is built with:
  1. <a href="https://www.typescriptlang.org/">TypeScript</a>
  2. <a href="https://nodejs.org/en/">NodeJS</a>
  3. <a href="https://sharp.pixelplumbing.com/">Sharp</a>
  
  ## Scripts<a id='scripts'>
  - To install the required dependencies: `npm install`
  - To compile typescript to javascript: `npm run build`
  - To use ESLint on the typescript files: `npm run lint`
  - To use Prettier on the typescript files: `npm run prettier`  
  - To use jasmine and supertest for testing: `npm run test`
  - To start the server at port 3000: `npm run start`
  
## Usage<a id='usage'>
|Paramter|Type|Description|
|-----|-----|----------|
|imageName|String|The fully qualified image name ex.RobinSharma-3840x2160.jpg| 
|width|number|The resized image width|
|height|number|The resized image height|
  - **General Form** http://127.0.0.1:3000/resize?imageName={fileName}&width={width}&height={height}  **Replace words within praces {} with desired input**
  
  
  - **Example 1** To list all images available use http://127.0.0.1:3000/listimages
  - **Example 2** To resize the file RobinSharma-3840x2160.jpg with width = 600 and height = 400 use http://127.0.0.1:3000/resize?imageName=RobinSharma-3840x2160.jpg&width=600&height=400
