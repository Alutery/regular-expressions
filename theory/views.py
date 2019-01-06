from django.shortcuts import render

# Create your views here.
def theory(request):
    return render(request, 'theory/main.html')

def less1(request):
    return render(request, 'theory/lessons/lesson_1.html')

def less2(request):
    return render(request, 'theory/lessons/lesson_2.html')