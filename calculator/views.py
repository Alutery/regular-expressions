from django.shortcuts import render
from django.http import HttpResponse
from practice.lib import AutomataTheory
from django.http import JsonResponse
from django.views import View  # import the View parent class
from django.views.decorators.csrf import csrf_exempt

from mainApp.models import CompletedQuestions, QuestionCategory, Tasks


def get_actions(request):
    if request.POST:
        inputRegex = request.POST.get('input')
        inputWord = request.POST.get('word')

        try:
            a = AutomataTheory.NFAfromRegex(inputRegex)
            dfa = AutomataTheory.DFAfromNFA(a.getNFA())
            result = dfa.acceptsString(inputWord)

            return JsonResponse({'correct': result[0], 'actions': result[1] })

        except BaseException:
            return JsonResponse({'correct': '2' })

class Calculator(View):

    def get(self, request):
        return render(request, 'calculator/main.html')

    def post(self, request):
        inputRegex = request.POST.get('input')

        try:
            a = AutomataTheory.NFAfromRegex(inputRegex)
            dfa = AutomataTheory.DFAfromNFA(a.getNFA())
            minDFA = dfa.getMinimisedDFA()
            dotFile = minDFA.getDotFile()

            return JsonResponse({'correct': True, 'dotFile': dotFile })   

        except BaseException:
            return JsonResponse({'correct': False })

