# Tom the IEP Assistant
Tom is an Azure Bot to assist students and guardians with navigating the process of setting up an IEP and ensuring it is being followed.

## The Issue Tom Solves
Ensuring students with disabilities have an equal right to learning opportunities especially now that the Education System is in a period of large changes.

## Directory
iep-assistant-react/
- Houses the React Application front end.
IEPBotTom/
- Houses the source code from Bot Composer Framework for Tom.
Resources/ 
- Houses resources used in the application such as the Letter Templates for the emails.

## Running the project
- Install and run Bot Framework Composer.
- Open the IEPBotTom folder in the application.
- Publish the Bot to your own Azure instance following the directions in the Bot Framework Composer Documentation.
- `cd iep-assistant-react/`
- `vim .env`
- Paste the following `REACT_APP_BOT_API_KEY=` followed by the Key from the Web Channel for the Bot on Azure.
- `npm install`
- `npm run start`
- Open the site once it is live.

## Test out the production version of Tom
Tom is currently live at https://iepbottom.azurewebsites.net/

## Inspiration
Tom was inspired by my mother’s(a special needs educator) increased frustration and concern for her students when schools were not properly following IEPs at the start of the COVID-19 pandemic leaving students with disabilities behind. In addition, Tom supports setting up an IEP as my mother also explained the challenges many families go through with setting up an IEP for their child even before COVID-19.

## What it does
Tom assists both students and guardians of students with creating a new IEP and ensuring existing ones are being followed. 

## How we built it
-Tom was built with Bot Composer Framework to deploy an Azure Bot. 
-The bot is accessible from a Create React App that is hosted with an Azure Web App.
-Tom utilizes Application Insights for improving development.
-Tom utilizes Language Understanding(LUIS) for understanding the user and responding to them correctly.

## Challenges I ran into
I faced many challenges while building Tom. The primary challenge when building Tom was finding time to work on Tom between being a full-time student, part-time intern, and heavily involved in the university as midterms approached. Also, I struggled to publish Tom to Azure due to account regulations and some restrictions built into the Composer Framework that required me to pull down contributors pull requests. One avoidable challenge that I would do differently next time was I reinvented the wheel when building the URL cleansing for generating the emails for the user in JS versus using a package.

## Accomplishments that we're proud of
This was my first Azure Cloud application so I am extremely proud that I learned how to utilize Azure Cloud(thanks heavily to the Cloud Skills Challenge) and have a working product by the end of the hackathon. Another accomplishment I am proud of is building a product that not only helps the world to become more accessible but also helps with educating the youth.
## What we learned
I learned the most about IEPs, the processes, and laws associated with them during this hackathon from my research on the internet in addition to talking to my mom and some of her clients.  I also learned how to use Azure Cloud services including building a bot with language understanding on Azure and hosting a web app there. Finally, I learned how to use mailto links for the generated emails and this is something I had never done before.
## What's next for Tom the IEP Assistant
I have many ideas for the future of Tom so that he can get better at helping users. First and foremost, I would like to add chatbot features for correcting things such as somebody’s name or email(this was not added solely based on time constraints). I would also like to add more questions for the user to generate a better email. Some of these questions include why the student needs or has an IEP, pronouns of the student, name of the school that the student attends, name of the teacher if they are reaching out to a different faculty member. Finally, I think it would be great to add a connection to a list of Education Advocates and Attorneys to recommend ones that are close to the user if needed.
