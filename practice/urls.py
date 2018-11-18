from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.practice, name='practice'),
]