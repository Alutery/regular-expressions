from django.shortcuts import render
from django.http import HttpResponse
from .forms import CheckEquivalence

# Create your views here.
def practice(request):
    return render(request, 'practice/main.html')

def task1(request):
    return render(request, 'practice/tasks/task_1.html')

def task2(request):
    return render(request, 'practice/tasks/task_2.html')

def task3(request):
    return render(request, 'practice/tasks/task_3.html')

def taskDFAtoregex(request):
    sub_template = 'practice/tasks/subtemplates/input.html'

    if request.method == 'POST':
        input = request.POST['q']
        
        sub_template = 'practice/tasks/subtemplates/result.html'
        return render(request, 'practice/tasks/task_DFA_to_regex.html', {'url' : sub_template, 'correct' : 0, 'input' : input})

    else:
        InputForm = CheckEquivalence()
        
    return render(request, 'practice/tasks/task_DFA_to_regex.html', {"url" : sub_template})

def get_check_equivalence(request):
    
    if request.method == 'GET':
        if 'q' in request.GET:
            return HttpResponse('Вы ввели %s' % request.GET['q']);
        else:
            return HttpResponse('В поле пусто.');