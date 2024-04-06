
- This Node.js application scrapes the latest stories from the Time.com website and returns them as JSON data.

## Installation
- Make sure you have Node.js installed on your machine.

        Clone this repository:
        git clone <repository-url>

- Navigate to the project directory:

       cd deeplogic_assignment


### Usage
- To start the server, run the following command:


         node index.js

- The server will start running on http://localhost:3000. You can access the latest stories data by making a GET request to http://localhost:3000/getTimeStories.

- Response Format
The server responds with a JSON array containing objects representing each story. Each story object has two properties: title and link.

        [
        {
        "title": "Trump Tries to Sidestep a Gag Order",
        "link": "https://time.com/6964255/trump-judges-daughter-gag-order/"
        },
        {
        "title": "The 15 Best Religious Horror Movies",
        "link": "https://time.com/6960996/the-tk-best-religious-horror-movies-of-all-time/"
        },
        {
        "title": "Evidence of Dangerous 'Forever Chemicals' Found in Bandages",
        "link": "https://time.com/6963358/pfas-forever-chemicals-bandages/"
        },
        {
        "title": "How Often Do Earthquakes Happen in the Northeast?",
        "link": "https://time.com/6964177/new-york-earthquake-east-coast/"
        },
        {
        "title": "Biden Calls on Congress to Fund Baltimore Bridge Recovery",
        "link": "https://time.com/6964100/joe-biden-baltimore-visit-bridge-recovery-congress/"
        },
        {
        "title": "COVID-19 Changed the Leading Causes of Death",
        "link": "https://time.com/6964145/covid-19-leading-causes-death/"
        }
        ]