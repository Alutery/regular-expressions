from django.shortcuts import render

# Create your views here.
def practice(request):
    return render(request, 'practice/main.html')

def task1(request):
    return render(request, 'practice/tasks/task_1.html')

def task2(request):
    return render(request, 'practice/tasks/task_2.html')

def task3(request):
    return render(request, 'practice/tasks/task_3.html')

def task4(request):
    return render(request, 'practice/tasks/task_4.html')