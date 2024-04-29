from flask import Flask, request
from flask_cors import CORS
import logging
import sys
sys.path.append("src")
import chatbot

logging.basicConfig(filename="./src/logs/flask.log", level=logging.INFO)
app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def ask_gpt():
    question = request.json
    gpt_response = chatbot.ask_question_with_rag(question)
    print(gpt_response)
    return gpt_response