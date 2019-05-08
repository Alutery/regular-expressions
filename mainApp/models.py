# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings



class QuestionCategory(models.Model):
    name = models.CharField(max_length=40)
    questionsnumber = models.IntegerField(default=5)

    class Meta:
        verbose_name = 'Question Category'
        verbose_name_plural = 'Question Categories'
    
class CompletedQuestions(models.Model):
    userID = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="related userID",
    )

    categoryID = models.ForeignKey(
        QuestionCategory, 
        on_delete=models.CASCADE,
        verbose_name="related category",
    )

    questionresults = models.CharField(max_length=20)

    class Meta:
        verbose_name = 'Completed Questions'
        verbose_name_plural = 'Completed Questions'

    @property
    def answers(self):
        "Returns the user's results."
        category = QuestionCategory.objects.get(pk = self.categoryID)[0]
        return {
            'category_name' : category.name,
            'questions_number' : category.questionsnumber,
            'answers' : [i == 1 for i in str(self.questionresults)]
            }
    


