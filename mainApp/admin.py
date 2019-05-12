from django.contrib import admin
from .models import QuestionCategory, CompletedQuestions, Tasks

admin.site.register(QuestionCategory)

admin.site.register(CompletedQuestions)

admin.site.register(Tasks)

# Register your models here.
