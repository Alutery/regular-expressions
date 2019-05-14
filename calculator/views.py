from django.shortcuts import render
from django.http import HttpResponse
from practice.lib import AutomataTheory
from django.http import JsonResponse
from django.views import View  # import the View parent class

from mainApp.models import CompletedQuestions, QuestionCategory, Tasks


class Calculator(View):
    
    def get(self, request):
        return render(request, 'calculator/main.html')

    def post(self, request):
        return JsonResponse({'correct': check(request)})
