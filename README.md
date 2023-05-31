# b7a10-chef-recipe-hunter-client-side-Mahbub192

* Live link : https://cooking-chef-aef2c.web.app/

* This project shows some chef information, some information about what this chef cooks, and some information about how to cook.

* As shown on the home page, if the user is logged in, then the user's profile will be displayed, which on hovering the mouse over the profile image will display the user's name. If there is no login then the login button is in the navbar, and on this page there are Latest Blog, Our Chef card, MOST SELLING FOOD block.

* The data of Our Chef card is given from the link https://cooking-chef-server-mahbub192.vercel.app/chef, (I have created an app here for the server side, and uploaded that app to Vercel). Lazy loading is used here (for loading chef images)

* https://daisyui.com/components/carousel/ has been used for MOST SELLING FOOD block, the image and name of the food is given in this carousel which can be changed by clicking, right or left button of the keyboard. The data in this blog (food image and name) is loaded dynamically

* There is a login registration page on this site, if the user wants, he can login by providing Google account and GitHub. (You can also do it with email and password).

* On the about chef page, the information of different chefs is shown, and that chef's (profile image, name, experience, recipes, likes) is shown. 3 recipes of this chef are shown.

* About Chef page data is loaded dynamically (https://cooking-chef-server-mahbub192.vercel.app/chef/${id}) the data will not load until you gather it will show a loading spinner.

* Answers to 4 questions have been given on the Question & Ans page, and there is a button named Generate PDF on this page, where if clicked, the answers to the 4 questions will be downloaded in PDF format.