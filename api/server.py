from flask import Flask
from flask_cors import CORS
from os import environ

app = Flask(__name__)

@app.route("/api/hello")
def hello_world():
    return "<p>Hello Flask</p>"