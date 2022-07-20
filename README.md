# MochiMachi 
An e-commerce demo web app using Salesforce as a databse.
## I created this project for YOU and ME because...
- We are hands-on developer and learner who want to practice and show the world that we know to do things.
### Description
- MochiMachi is a demo for a Mochi shop which has a web app for customers to place orders (buy Mochi). 
- The data - customers data, order details are stored in Salesforce with its Objects.
## The key focus of this project
  + Salesforce integration via API using JSforce library 
  + Object relationships in Salesforce
  + `fetch` and Express framework (Router)
  + TypeScript
  + Vercel deployment for front-end
  + Heroku deployment for back-end
## Demo
## Built With
![image](https://user-images.githubusercontent.com/61923601/179989333-c1e3df95-8b07-4083-be1c-266cee383764.png)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
<img src="https://jsforce.github.io/images/jsforce-logo-trans.png" width="100" height="50">
<img src="https://camo.githubusercontent.com/ad3547ec57ee5877eef636f40cd104da8bbc39f4fa2acb9697d2c55663311b1f/68747470733a2f2f6c6f67696e2e73616c6573666f7263652e636f6d2f696d672f6c6f676f3139302e706e67" width="100" height="50">
## Salesforce Prep
### Create a developer org 
- You need a developer Salesforce Org to be your sandbox. Create here https://developer.salesforce.com/signup
- **OR** If you have an account in Trailhead (https://trailhead.salesforce.com/en/today/new_user)
   - Click on your photo profile (top right corner)
   - "Hands-On Orgs" > Create Playground
   - Note down your username (email format) and Password
 ![image](https://user-images.githubusercontent.com/61923601/180001516-b461c169-0ff9-40e9-ab9f-03b9bd76b7c0.png)
### Objects In Use
- Account
- Contract
- Order
- Order Item
- Product
- Pricebook
## Future Work (where you can contribute)
- Testing
- Refactor Salesforce integration using OAuth (Currently using username and password for each login which consumes API limit)
- Screen responsiveness
- Set up changelog
- Repeated details on `review Your Order" because states are not cleaned properly
- Confirmation modal with contract id from Salesforce

## Clone and no contributing
To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:
```bash
# Clone this repo
$ git clone https://github.com/TotoroSyd/MochiMachi.git

# Go into the repo in your local
$ cd <your dir>

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```
## Start Contributing
```bash
# Fork the project

# Create your branch 
$ git checkout -b feature/AmzingFeature

# Commit your Changes 
$ git commit -m "Add some Amazing Feature"

# Push to the Branch
$ git push origin feature/AmazingFeature

# Open a Pull request with tag "enhancement". I will see your request and I will review to merge.
```
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
## Acknowledgements

