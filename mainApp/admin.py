from django.contrib import admin
from .models import QuestionCategory, CompletedQuestions, Task

admin.site.register(QuestionCategory)

admin.site.register(CompletedQuestions)

admin.site.register(Task)

# Register your models here.
