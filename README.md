# Zujo-set-2-WebApp
[![forthebadge made-with-python](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.python.org/)<br>
[![forthebadge made-with-python](https://forthebadge.com/images/badges/uses-html.svg)](https://www.python.org/)<br>
[![forthebadge made-with-python](https://forthebadge.com/images/badges/uses-css.svg)](https://www.python.org/)<br>
[![forthebadge made-with-python](https://forthebadge.com/images/badges/uses-js.svg)](https://www.python.org/)<br>
```
Description:
Recruitment task by ZUJO company

Task 1: Web-app

Zujo wants to create a Web App which can dump and aggregate data from CSV which has
following fields
1. Username
2. Amount
3. Date

Requirements:
1. Validate each field such as alphanumeric username, integer for amount and date.
2. Dump data into the database and show it on table.
3. Also group data by use and year of the date.

Constraints:
1. Design of your web app needs to be match with https://www.zujo.co/
2. Use pure UI components if possible
3. You can develop this app using only languages such as NodeJS, React Js, PHP (Laravel).

Instructions:
1. Follow good code standards and divide your components presentation and
containers.
2. Be as genuine as possible.
3. Hosting it on any free hosting platform would be appreciated.
```
# Technology Used

[![Generic badge](https://img.shields.io/badge/JS-NodeJS-<COLOR>.svg)](https://shields.io/)<br>
[![Generic badge](https://img.shields.io/badge/DB-MongoDB-<COLOR>.svg)](https://shields.io/)<br>
[![Generic badge](https://img.shields.io/badge/HTML-CSS-<COLOR>.svg)](https://shields.io/)

# How to Run WebApp using Node Server

```
1. First Download the code and navigate to the directory where the code is downloaded.
2. Open Git Bash and use either node or nodemon to run this web app.
3. nodemon server.js or node server.js.
```

# Homepage

```
In Homepage of Web App, we will see a form to upload a CSV file to dump its data into Database.
```
![alt text](https://i.ibb.co/BgkXFLp/Screenshot-360.png)

# Uploading the .csv file on Web App

```
We can upload .csv file either by selection or drag and drop.
```
![alt text](https://i.ibb.co/GF41GrY/Screenshot-361.png)

# Validation before dumping the data 

```
It perform validation on data and only insert valid data into Database and discard invalid records of data.
```
![alt text](https://i.ibb.co/YcgwNWd/Screenshot-358.png" )

# Displaying Data

```
It display data in form of a table
```
![alt text](https://i.ibb.co/tcZd0dY/Screenshot-357.png)

# Group by Username:

```
We can perform Groupby operation on username, It'll display data grouped by username (Apply all necessary rowspanning in table)
```
![alt text](https://i.ibb.co/zRZK4Ny/Screenshot-356.png)

# Group by Year from Date:

```
We can perform Groupby operation on Year of date, It'll display data grouped by Date (Apply all necessary rowspanning in table)
```
![alt text](https://i.ibb.co/bFvV2Br/Screenshot-355.png)
