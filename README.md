# ORM E Commerce Back End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
This application demonstrates a functional backend database using MySQL2 and Sequelize.

<p>&nbsp;</p>

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [license](#license)
- [Contributing](#Contributing)
- [Questions](#Questions)

<p>&nbsp;</p>

## Installation
To use this application, first fork and download files from this repository. 

Next, rename the .env.example file to .env (see example below) and adjust the .env file to reflect the appropriate USER and password (PW). 

<p>&nbsp;</p>

**change**

```
.env.example
```

**to**

```
.env

```

<p>&nbsp;</p>

Then, install all necessary dependencies, by running the following command in the terminal:

```
npm init i
```

<p>&nbsp;</p>

If missing package.json file, run the following command:

```
npm init -y
```

<p>&nbsp;</p>

Then, check the package.json file for the following dependencies and run the following command(s) if missing: 

<p>&nbsp;</p>

Node MySql2

```
npm i mysql2
```

<p>&nbsp;</p>

Sequelize

```
npm i sequelize
```

<p>&nbsp;</p>

dotenv

```
npm i dotenv
```

<p>&nbsp;</p>

Express 
```
npm i express
```

Note: This application requires installation of node.js, npm and MySQL.

<p>&nbsp;</p>

## Usage

<p>&nbsp;</p>

To initialize the application, first enter the MySQL shell by using the following command in the terminal:

```
mySQL -u root
```

<p>&nbsp;</p>

Next, add the database by using the following command followed by the schema.sql path name: (example below)

```
source 
```

_Example_

```
source c:\Users\cassi\bootcamp\homeworks\ORM-E-Commerce-Back-End\db\schema.sql
```

<p>&nbsp;</p>

Then, exit the MySQL shell by using the following command in the terminal:
```
exit
```

<p>&nbsp;</p>

After exiting the MySQL shell, seed the database by using the following command in the terminal:

```
node seeds/
```

<p>&nbsp;</p>

Then, start the server using nodemon or the node server.js command in the terminal.

<p>&nbsp;</p>

Finally, test API endpoints using insomnia.

<p>&nbsp;</p>

### Demo Video

<p>&nbsp;</p>

The following animation shows the application's inital steps for starting the application:

![demo](./demo.gif)

use the following [link](https://drive.google.com/file/d/1PHYqEdK9QS9VdDLjpya30pDUSY_QKQXI/view) to access the full length video.

## License

This application is covered under a MIT license. 
To learn more about this license, please visit this [site](https://choosealicense.com/licenses/mit/).

## Contributing
To contribute to this repo, please contact me on GITHUB or by email (Link below).

## Questions
This application can be found on my [github](https://www.github.com/cassiep1986?tab=repositories/).

For additonal questions you can contact me by [email](mailto:cassiep1986@gmail.com).