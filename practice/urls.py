from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.practice, name='practice'),
    path('task_1/', views.task1, name='task1'),
    path('langDescription/', views.langDescription ,name='lang_description'),
    path('simplifyRegex/', views.simplifyRegex ,name='simplify_regex'),
    path('task_2/', views.task2, name='task2'),
    path('task_3/', views.task3, name='task3'),
    path('taskDFAtoregex/', views.taskDFAtoregex, name='task_DFA_to_regex'),
]