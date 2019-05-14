from myjson import *

def getInput(prompt):
    while True:
        result = input(prompt)
        if result:
            return result

if __name__ == '__main__':
    model = input('model (default = mainApp.Tasks): ') or 'mainApp.Tasks'
    taskType = getInput('taskType: ')

    task = {}
    task['model'] = model
    task['pk'] = None

    fields = {}
    fields['taskType'] = taskType

    description = getInput('description: ')
    fields['description'] = description

    has_additional_description = True if getInput('Has additional description? (enter 1 for YES): ') == '1' else False
    fields['has_additional_description']  = has_additional_description
    if has_additional_description:
        additional_description = getInput('Additional description: ')
        fields['additional_description'] = additional_description
    
    answer = getInput('Answer: ')
    fields['answer'] = answer

    task['fields'] = fields
    file = getInput('Filename: ')
    writeToJSON(file, task)






