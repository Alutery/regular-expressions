from django.shortcuts import render
from django.http import HttpResponse
from .forms import CheckEquivalence
from practice.lib import AutomataTheory
from queue import Queue
from django.http import JsonResponse

from mainApp.models import CompletedQuestions,QuestionCategory

def validate_regex(request):
    input = request.GET.get('input', None)
    answer = request.GET.get('answer', None)

    answer = aswers[answer]

    correctness = check_equivalence(input, answer)

    data = {}
    if correctness == 1:
        data = {'correctness' : f'<span style="color: green">Верно! </span>(Вы ввели: {input})', 'correct':True}
    else:
        data = {'correctness' : f'<span style="color: red">Не верно! </span>(Вы ввели: {input})', 'correct':False}

    return JsonResponse(data)

def send_result(request):
    category = request.GET.get('category', None)
    i = int(request.GET.get('i', None))
    n = int(request.GET.get('n', None))

    if category and n:
        profile = request.user
        q = CompletedQuestions.objects.filter(userID=profile.id, categoryID=category)
        if q.exists():
            q = q[0]
            results = q.questionresults
            q.questionresults = results[:i] + '1' + results[i+1:]
            q.save()
        else:
            results = '0' * n
            # results[i] = '1'
            results = results[:i] + '1' + results[i+1:]
            category = QuestionCategory.objects.get(id=category)
            print(results)
            q = CompletedQuestions(userID=profile, categoryID=category, questionresults=results)
            q.save()
    
    return HttpResponse(0)
        

# Create your views here.
def practice(request):
    return render(request, 'practice/main.html')

def chainAcceptance(request):
    return render(request, 'practice/tasks/chain_acceptance.html')
    
def task2(request):
    return render(request, 'practice/tasks/task_2.html')

def task3(request):
    return render(request, 'practice/tasks/task_3.html')

def simplifyRegex(request):
    return render(request, 'practice/tasks/simplify_regex.html')

def langDescription(request):
    # if request.method == 'POST':
    #     input = request.POST['q']
    #     answer = request.POST['answer']

    #     correctness = check_equivalence(input, answer)

    #     sub_template = 'practice/tasks/subtemplates/lang_description/result.html'
    #     return render(request, 'practice/tasks/lang_description.html', {'url' : sub_template, 'correct' : correctness, 'input' : input})
    # else:  
    return render(request, 'practice/tasks/lang_description.html')

def taskDFAtoregex(request):
    # if request.method == 'POST':
    #     input = request.POST['q']
    #     answer = request.POST['answer']

    #     correctness = check_equivalence(input, answer)

    #     sub_template = 'practice/tasks/subtemplates/task_DFA_to_regex/result.html'
    #     return render(request, 'practice/tasks/task_DFA_to_regex.html', {'url' : sub_template, 'correct' : correctness, 'input' : input})
    # else:  
    # if request.method != 'POST':
    return render(request, 'practice/tasks/task_DFA_to_regex.html')

def check_equivalence(a, b):
    a = AutomataTheory.NFAfromRegex(a)
    b = AutomataTheory.NFAfromRegex(b)

    dfa_1 = AutomataTheory.DFAfromNFA(a.getNFA())
    dfa_2 = AutomataTheory.DFAfromNFA(b.getNFA())

    minDFA_1 = dfa_1.getMinimisedDFA()
    minDFA_2 = dfa_2.getMinimisedDFA()

    if minDFA_1.language != minDFA_2.language:
        return 0

    return bfsEquivalenceCheck(minDFA_1.transitions, minDFA_2.transitions, minDFA_1.startstate, minDFA_2.startstate, minDFA_1.finalstates, minDFA_2.finalstates, minDFA_1.language)

def bfsEquivalenceCheck(aut1, aut2, s1, s2, f1, f2, L):
    q = Queue()
    q.put((s1, s2))

    print(aut1)
    print(aut2)

    used1 = [s1]
    used2 = [s2]

    while not q.empty():
        u, v = q.get()
        if (u in f1) != (v in f2):
            return 0

        used1.append(u)
        used2.append(v)

        for c in L:
            if ((u in aut1) and (c in aut1[u]) and (v in aut2) and (c in aut2[v])) and ((aut1[u][c] not in used1) or (aut2[v][c] not in used2)):
                q.put((aut1[u][c], aut2[v][c]))
    return 1



    