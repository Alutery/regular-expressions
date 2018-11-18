from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.practice, name='practice'),
    path('task_1/', views.task1, name='task1'),
]