from django.shortcuts import render
from django.http import HttpResponse
from .forms import CheckEquivalence
from practice.lib import AutomataTheory
from queue import Queue
from django.http import JsonResponse
from django.views import View  # import the View parent class

from mainApp.models import CompletedQuestions, QuestionCategory, Tasks

def validate_regex(request):
    input = request.POST.get('input', None)
    answer = request.POST.get('answer', None)

    correctness = check_equivalence(input, answer)

    data = {}
    if correctness == 1:
        data = {'correctness' : f'<span style="color: green">Верно! </span>(Вы ввели: {input})', 'correct':True}
    else:
        data = {'correctness' : f'<span style="color: red">Не верно! </span>(Вы ввели: {input})', 'correct':False}

    return JsonResponse(data)

def send_result(request):
    if request.user.is_authenticated:
        category = request.GET.get('category', None)
        i = int(request.GET.get('i', None))
        n = int(request.GET.get('n', None))

        if category and n:
            profile = request.user
            category = QuestionCategory.objects.get(code_name=category).id
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
        


class GetTasks(View):
    def post(self, request):
        taskType = request.POST.get('taskType')
        tasks = Tasks.objects.filter(taskType=taskType)

        data = {}
        if tasks.exists():
            description = []
            description2 = [] # optional
            numbers = []

            for task in tasks:
                description.append(task.description)
                numbers.append(task.id)

            if tasks[0].has_additional_description:
                for task in tasks:
                    description2.append(task.additional_description)
            
            data['description'] = description
            data['description2'] = description2
            data['numbers'] = numbers

        return JsonResponse(data)


def check(request):
    taskType = request.POST.get('taskType')
    number = request.POST.get('number')
    answer = request.POST.get('answer')

    task = Tasks.objects.get(id=number)
 
    return answer == task.answer


class ChainAcceptance(View):

    def get(self, request):
        try:
            tasks_number = Tasks.objects.filter(taskType='ChainAcceptance').count()
        except:
            tasks_number = 0

        return render(request, 'practice/tasks/chain_acceptance.html', {'tasks_number' : tasks_number, 'range' : range(1, tasks_number+1)})

    def post(self, request):
        return JsonResponse({'correct': check(request)})

    
class ExpressionBelongs(View):

    def get(self, request):
        try:
            tasks_number = Tasks.objects.filter(taskType='ExpressionBelongs').count()
        except:
            tasks_number = 0

        return render(request, 'practice/tasks/expression_belongs.html', {'tasks_number' : tasks_number, 'range' : range(1, tasks_number+1)})

    def post(self, request):
        return JsonResponse({'correct': check(request)})


class Accordance(View):
    def get(self, request):
        try:
            tasks_number = Tasks.objects.filter(taskType='Accordance').count()
        except:
            tasks_number = 0

        return render(request, 'practice/tasks/accordance.html', {'tasks_number' : tasks_number, 'range' : range(1, tasks_number+1)})

    def post(self, request):
        return JsonResponse({'correct': check(request)})

class SimplifyRegex(View):
    def get(self, request):
        try:
            tasks_number = Tasks.objects.filter(taskType='SimplifyRegex').count()
        except:
            tasks_number = 0

        return render(request, 'practice/tasks/simplify_regex.html', {'tasks_number' : tasks_number, 'range' : range(1, tasks_number+1)})

    def post(self, request):
        return JsonResponse({'correct': check(request)})


class LangDescription(View):
    def get(self, request):
        try:
            tasks_number = Tasks.objects.filter(taskType='LangDescription').count()
        except:
            tasks_number = 0

        return render(request, 'practice/tasks/lang_description.html', {'tasks_number' : tasks_number, 'range' : range(1, tasks_number+1)})
    
    def post(self, request):
        answer = request.POST.get('input', None)
        taskType = request.POST.get('taskType')
        number = request.POST.get('number')

        task = Tasks.objects.get(id=number)
        correctness = check_equivalence(answer, task.answer)

        data = {}
        if correctness == 1:
            data = {'correctness' : f'<span style="color: green">Верно! </span>(Вы ввели: {answer})', 'correct':True}
        else:
            data = {'correctness' : f'<span style="color: red">Не верно! </span>(Вы ввели: {answer})', 'correct':False}

        return JsonResponse(data)

class TaskDFAtoregex(View):
    def get(self, request):
        try:
            tasks_number = Tasks.objects.filter(taskType='TaskDFAtoregex').count()
        except:
            tasks_number = 0

        return render(request, 'practice/tasks/task_DFA_to_regex.html', {'tasks_number' : tasks_number, 'range' : range(1, tasks_number+1)})
    
    def post(self, request):
        answer = request.POST.get('input', None)
        taskType = request.POST.get('taskType')
        number = request.POST.get('number')

        task = Tasks.objects.get(id=number)
        correctness = check_equivalence(answer, task.answer)

        data = {}
        if correctness == 1:
            data = {'correctness' : f'<span style="color: green">Верно! </span>(Вы ввели: {answer})', 'correct':True}
        else:
            data = {'correctness' : f'<span style="color: red">Не верно! </span>(Вы ввели: {answer})', 'correct':False}

        return JsonResponse(data)


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



    