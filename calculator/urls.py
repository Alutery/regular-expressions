from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.Calculator.as_view(), name='calculator'),
    path('check/', views.get_actions, name='get_actions'),
]