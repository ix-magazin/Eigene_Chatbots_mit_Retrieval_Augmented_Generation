import os
from dotenv import load_dotenv
from openai import OpenAI
from vectordb import Memory

load_dotenv()
MY_ENV_VAR = os.getenv('MY_ENV_VAR')
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
memory = Memory(memory_file="./memory.txt", 
                chunking_strategy={'mode':'sliding_window', 'window_size': 80, 'overlap': 20}, 
                embeddings="BAAI/bge-m3")


def askgpt(user_question, context):
    msgs = []
    msgs.append({"role": "system", 
                 "content": "Nutze den Kontext um die Nutzerfrage zu beantworten:" + context})
    msgs.append({"role": "user", "content": user_question})
    return client.chat.completions.create(model="gpt-4", messages=msgs)


def find_relevant_articles(question):
    result = memory.search(question, top_n=1)
    print(result)
    return result


def ask_question_with_rag(question):
    rag_context = find_relevant_articles(question)
    gpt_response = askgpt(user_question=question, context=rag_context[0]["chunk"])
    answer = gpt_response.choices[0].message.content
    return answer