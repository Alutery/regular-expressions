from django.urls import path, re_path

from . import views

urlpatterns = [
    path('intro/', views.intro, name='intro'),
    path('basicDefinitions/', views.basic_definitions, name='basic_definitions'),
    path('FA/', views.FA, name='FA'),
    path('conversionChart/', views.conversionChart, name='conversion_chart'),
    path('NFAToDFA/', views.NFAToDFA, name='NFA_to_DFA'),
    path('regextoNFA/', views.regexToNFA, name='regex_to_NFA'),
    path('DFAtoregex/', views.DFAtoregex, name='DFA_to_regex'),
]