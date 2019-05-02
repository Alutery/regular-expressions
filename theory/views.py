from django.shortcuts import render

# Create your views here.
def theory_intro(request):
    return render(request, 'theory/lessons/lesson_1.html')

def less1(request):
    return render(request, 'theory/lessons/lesson_1.html')

def FA(request):
    return render(request, 'theory/lessons/FA.html')

def regexToNFA(request):
    return render(request, 'theory/lessons/regex_to_NFA.html')

def DFAtoregex(request):
    return render(request, 'theory/lessons/DFA_to_regex.html')