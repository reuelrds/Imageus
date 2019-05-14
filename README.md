# Imageus
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Imageus is a website which displays photos to the user. The User's can view the Photos and also E-Mail their favourite photos.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This Website was built using Angular for Front-End and Flask as it's Backend. The Sample Database provided uses Unsplash's API to load Photo Details and the E-Mail's are sent using SendGrid


#### *A Live Preview can be found here [Imageus](https://reuelrds.github.io/Imageus).*

## To Run this locally

Clone this Repository
```bash
> git clone https://github.com/reuelrds/Imageus
> cd Imageus
```

Install npm dependencies
```bash
> npm install
```

Install Flask Dependencies
```bash
> cd backend
> conda env create -f environment.yml
> source activate flask
```
###### *Note: The above commands assume that you use Anaconda as your python distrubution. If you are not using it then you can find the list of dependencies in `requirements.txt` file.*


Update the .flaskenv file to include your SendGrid API key, Template Id and Sender E-mail Address. Also you can change the Port, Environement and the Database Url

Start the Flask Server
```bash
> flask run
```

Start the Angular application in a new Terminal from project root directory
```bash
> npm run start -- -o
```
