from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.Calculator.as_view(), name='calculator'),
]