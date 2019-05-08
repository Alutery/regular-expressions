# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models



class QuestionCategory(models.Model):
    name = models.CharField(max_length=30)
    questionsnumber = models.IntegerField(default=5)
    
class ComletedQuestions(models.Model):
    categoryID = models.ForeignKey(
        QuestionCategory, 
        on_delete=models.CASCADE,
        verbose_name="related category",
    )
    questionresults = models.CharField(max_length=20)

    @property
    def answers(self):
        "Returns the user's results."
        return [i == 1 for i in str(self.questionresults)]


