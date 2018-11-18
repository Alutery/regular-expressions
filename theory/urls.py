from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.theory, name='theory'),
    path('lesson_1/', views.less1, name='less1')
]