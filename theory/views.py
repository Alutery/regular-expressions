from django.shortcuts import render

# Create your views here.

def intro(request):
    return render(request, 'theory/lessons/intro.html')

def basic_definitions(request):
    return render(request, 'theory/lessons/basic_definitions.html')

def regexEquivalence(request):
    return render(request, 'theory/lessons/regex_equivalence.html')

def FA(request):
    return render(request, 'theory/lessons/FA.html')

def conversionChart(request):
    return render(request, 'theory/lessons/conversion_chart.html')

def NFAToDFA(request):
    return render(request, 'theory/lessons/NFA_to_DFA.html')

def regexToNFA(request):
    return render(request, 'theory/lessons/regex_to_NFA.html')

def DFAtoregex(request):
    return render(request, 'theory/lessons/DFA_to_regex.html')