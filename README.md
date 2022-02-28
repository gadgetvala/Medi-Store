# Introduction

> “Medi-Store 🩺
> is an application for Securing Medical Records Using Blockchain.

## :bulb: Key Features

- [x] User Can Add Unlimited Doctors.
- [x] Secure File Uploads Using IPFS.
- [x] Doctor Can Securely View Patient Documents.

## 🔥 &nbsp;Live Demo

https://user-images.githubusercontent.com/25782628/155971649-ff3349c2-2a07-4988-96a8-ac9aa5d4d071.mp4


## 🚀 &nbsp;Installation

To clone and run this application, you'll need **[Git](https://git-scm.com)**, **[Node.js](https://nodejs.org/en/)**, **[Ganache](https://trufflesuite.com/ganache/index.html)** and **[Metamask](https://metamask.io/)** installed on your computer.

**Start Ganche** then
From your command line:

```bash
# Setup Environment
$ npm i -g truffle

# Clone this repository
$ git clone https://github.com/gadgetvala/Medi-Store.git

# Go into the repository
$ cd Medi-Store/

# Install dependencies
$ npm install

# Build & Migrate Contract to Ganche Local Blockchain
$ truffle deploy

# Start Application
$ npm start
```

### 📦 &nbsp;Packages

Some very good packages are used in the project, not a big list.
Below are the information about these packages.

| package                                                             | explain                                                               |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [antd](https://www.npmjs.com/package/antd)                          | Ant Design Libary                                                     |
| [ipfs-http-client ](https://www.npmjs.com/package/ipfs-http-client) | Http Client to Connect Application with IPFS                          |
| [react-icons](https://www.npmjs.com/package/react-icons)            | Simple Icon Libary                                                    |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)  | For Application Routing.                                              |
| [react-toastify](https://www.npmjs.com/package/react-toastify)      | React-Toastify allows you to add notifications to your app with ease. |
| [web3](https://www.npmjs.com/package/web3)                          | A Web3 Client                                                         |

### 🧵 &nbsp;Directory Structure

The project directory structure in **src** is as follows:

```
├── aassets
├── components
├── context
├── contracts
├── screens
├── web3_config
├── app.js
├── index.css
├── index.js
```

Let me explain the other directories.

| directory   | explain                                            |
| ----------- | -------------------------------------------------- |
| aassets     | Contain Static Application Assets                  |
| components  | Contain all global shared Components               |
| context     | Contain Global App Context                         |
| contracts   | All Smart Contract                                 |
| screens     | App Screens & smaller component in it (Screen Lvl) |
| web3_config | Configrations Files Realted to Web3                |
| app.js      | React Router & Context Configration                |
| index.css   | Global Styles                                      |
| index.js    | Main App Entry Point                               |

## :clap: Done

Feel free to **file a new issue** with a respective title and description on the the [Medi-Store](https://github.com/gadgetvala/Medi-Store/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!

## 📘&nbsp; License

The Medi-Store app is released under the under terms of the [MIT License](LICENSE).

## :heart: Contributor

Made by [Suraj Verma](https://github.com/gadgetvala)
