from django.shortcuts import render
from registration.models import User
# from django.contrib.auth.models import User
from mainApp.models import QuestionCategory, CompletedQuestions
# Create your views here.

# @login_required
def profile(request):
    args = {} 
    profile = request.user
    userID = profile.id
    questions = CompletedQuestions.objects.filter(userID = userID)

    if questions.exists():
        args['results'] = True
        maxn = 0
        completed_questions = {}

        for question in questions:
            category = question.categoryID
            name = category.name
            n = Tasks.objects.filter(taskType=category.code_name).count()
            answers = [i == '1' for i in str(question.questionresults)]
            maxn = max(maxn, n)
            completed_questions[name] = answers


        args['completed_questions'] = completed_questions
        args['range'] = range(1, maxn + 1)
    print(args)
    return render(request, 'profilePage/profile.html', args)