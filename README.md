# Eigene Chatbots mit Retrieval Augmented Generation
Repository zum [Praxis-Artikel](https://www.heise.de/select/ix/2024/6/2407909441247961586) von Kai Konitzer und Ronny Frankenstein, erschienen in iX [06/2024](https://www.heise.de/select/ix/2024/6).

# iX-Tract
- Retrieval Augmented Generation (RAG) stellt großen Sprachmodellen zusätzliche Inhalte zur Verfügung, die beim Generieren von Text als Kontext einfließen.
- Neben einer Dokumentensammlung benötigt man für den Einsatz von RAG noch eine Vektordatenbank, in der die Dokumente aufbereitet liegen.
- Im produktiven Einsatz kommt man um das Optimieren von RAG-Parametern wie Segmentgröße oder Overlapping durch ausführliche Tests nicht herum.

# Current Chatbot using GPT-4, Flask, React.js and VectorDB

## Setup using opt venv and pip

1. Creation: `python3 -m venv .venv`
2. Activation: `source .venv/bin/activate`
3. Install requirements
4. Manually create folders src/training-data & src/logs
5. Add internal documents to training-data + change code to load them
6. Create .env file with your OPENAI_API_KEY=<key> (check: https://platform.openai.com/docs/quickstart?context=python)
7. Install frontend dependencies with `cd my-app` & `npm install`

## Indexing & Storing of data in vector database

`python src/database.py`

## Running Flask webserver

`export FLASK_APP=src/app.py`
`flask run`

## Running the React.js frontend

`cd my-app`
`npm start`
