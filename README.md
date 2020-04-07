# MonashBootcampWeek13
Burger Logger

This application is to use Node Express Handlebras to create a burger logger, with MySQL. 

Before You Begin
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

Your app will store every burger in a database, whether devoured or not.

Please follow the following instructions:
1. run npm init
2. run npm i
3. complete the config.json in config folder with your information
4. DB setup: 
   start MySQL command line tool and login: mysql -u root -p
   run source schema.sql
   run source seeds.sql
   run exit
5. run npm run dev to start nodemon