# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings

class Tasks(models.Model):
    taskType = models.CharField(max_length=30)
    has_additional_description = models.BooleanField()
    description = models.TextField()
    additional_description = models.TextField(blank=True)
    answer = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'

class QuestionCategory(models.Model):
    name = models.CharField(max_length=40)
    code_name = models.CharField(max_length=30)

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

    


