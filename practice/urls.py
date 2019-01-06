from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.practice, name='practice'),
    path('task_1/', views.task1, name='task1'),
    path('task_2/', views.task2, name='task2'),
    path('task_3/', views.task3, name='task3'),
    path('task_4/', views.task4, name='task4'),
]