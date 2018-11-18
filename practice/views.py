from django.shortcuts import render

# Create your views here.
def practice(request):
    return render(request, 'practice/main.html')

def task1(request):
    return render(request, 'practice/tasks/task_1.html')