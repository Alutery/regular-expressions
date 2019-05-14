import json 
import os

def writeToJSON(filename, data):
    cwd = os.path.dirname(os.path.realpath(__file__))
    path = cwd + '\\' + filename + '.json'
    with open(path, 'w') as fp:
        json.dump(data, fp)

def read(filename):
    cwd = os.path.dirname(os.path.realpath(__file__))
    path = cwd + '\\' + filename + '.json'
    with open(path, 'r') as json_file:
        json_data = json.load(json_file)
        print(json_data)