
### Current Chatbot using GPT-4, Flask, React.js and VectorDB

#### Setup using opt venv and pip

1. Creation: `python3 -m venv .venv`
2. Activation: `source .venv/bin/activate`
3. Install requirements
4. Manually create folders src/training-data & src/logs
5. Add internal documents to training-data + change code to load them
6. Create .env file with your OPENAI_API_KEY=<key> (check: https://platform.openai.com/docs/quickstart?context=python)
7. Install frontend dependencies with `cd my-app` & `npm install`

#### Indexing & Storing of data in vector database

`python src/database.py`

#### Running Flask webserver

`export FLASK_APP=src/app.py`
`flask run`

#### Running the React.js frontend

`cd my-app`
`npm start`
