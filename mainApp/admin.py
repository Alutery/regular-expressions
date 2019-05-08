from django.contrib import admin
from .models import QuestionCategory, CompletedQuestions

admin.site.register(QuestionCategory)

admin.site.register(CompletedQuestions)

# Register your models here.
