from django.shortcuts import render

# Create your views here.

def intro(request):
    return render(request, 'theory/lessons/intro.html')

def basic_definitions(request):
    return render(request, 'theory/lessons/basic_definitions.html')

def FA(request):
    return render(request, 'theory/lessons/FA.html')

def regexToNFA(request):
    return render(request, 'theory/lessons/regex_to_NFA.html')

def DFAtoregex(request):
    return render(request, 'theory/lessons/DFA_to_regex.html')