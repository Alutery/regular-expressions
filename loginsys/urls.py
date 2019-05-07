from django.urls import path, re_path

from . import views

urlpatterns = [
    # path('', views.practice, name='practice'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    # path('password_reset/', views.password_reset, name='password_reset'),
    # path('password_reset/done/', views.password_reset_done, name='password_reset_done'),
    # path('simplifyRegex/', views.simplifyRegex ,name='simplify_regex'),
    # path('task_2/', views.task2, name='task2'),
    # path('task_3/', views.task3, name='task3'),
    # path('taskDFAtoregex/', views.taskDFAtoregex, name='task_DFA_to_regex'),
    # path('validate_regex/', views.validate_regex, name='validate_regex'),
]