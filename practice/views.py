from django.shortcuts import render
from django.http import HttpResponse
from .forms import CheckEquivalence
from practice.lib import AutomataTheory
from queue import Queue


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
        answer = request.POST['answer']

        correctness = check_equivalence(input, answer)

        sub_template = 'practice/tasks/subtemplates/result.html'
        return render(request, 'practice/tasks/task_DFA_to_regex.html', {'url' : sub_template, 'correct' : correctness, 'input' : input})
    else:  
        return render(request, 'practice/tasks/task_DFA_to_regex.html', {"url" : sub_template})

def check_equivalence(a, b):
    a = AutomataTheory.NFAfromRegex(a)
    b = AutomataTheory.NFAfromRegex(b)

    dfa_1 = AutomataTheory.DFAfromNFA(a.getNFA())
    dfa_2 = AutomataTheory.DFAfromNFA(b.getNFA())

    minDFA_1 = dfa_1.getMinimisedDFA()
    minDFA_2 = dfa_2.getMinimisedDFA()

    # print(dfa_1.transitions)

    if minDFA_1.language != minDFA_2.language:
        return 0

    return bfsEquivalenceCheck(minDFA_1.transitions, minDFA_2.transitions, minDFA_1.startstate, minDFA_2.startstate, minDFA_1.language)

def bfsEquivalenceCheck(aut1, aut2, s1, s2, L):
    q = Queue()
    q.put((s1, s2))

    used1 = [s1]
    used2 = [s2]

    while not q.empty():
        u, v = q.get()
        if u != v:
            return 0

        used1.append(u)
        used2.append(v)

        for c in L:
            if (u in aut1 and c in aut1[u] and aut1[u][c] not in used1) or (v in aut2 and c in aut2[v] and aut2[v][c] not in used2):
                q.put((aut1[u][c], aut2[v][c]))
    return 1



    