from django.contrib import admin
from .models import QuestionCategory, ComletedQuestions

admin.site.register(QuestionCategory)

admin.site.register(ComletedQuestions)

# Register your models here.
