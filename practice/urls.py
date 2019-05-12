from django.urls import path, re_path

from . import views

urlpatterns = [
    # path('', views.practice, name='practice'),
    path('gettask/', views.GetTasks.as_view(), name='get_tasks'),
    path('chainAcceptance/', views.ChainAcceptance.as_view(), name='chain_acceptance'),
    path('langDescription/', views.langDescription ,name='lang_description'),
    path('simplifyRegex/', views.simplifyRegex ,name='simplify_regex'),
    path('task_2/', views.task2, name='task2'),
    path('task_3/', views.task3, name='task3'),
    path('taskDFAtoregex/', views.taskDFAtoregex, name='task_DFA_to_regex'),
    path('validate_regex/', views.validate_regex, name='validate_regex'),
    path('send_result/', views.send_result, name='send_result'),
]