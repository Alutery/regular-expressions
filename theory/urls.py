from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.theory_intro, name='theory_intro'),
    path('lesson_1/', views.less1, name='less1'),
    path('lesson_2/', views.less2, name='less2'),
    path('regextoNFA', views.regexToNFA, name='regex_to_NFA'),
]