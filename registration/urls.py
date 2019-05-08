from django.urls import path, re_path

from . import views

urlpatterns = [
    path('login/', views.loginUser, name='loginUser'),
    path('logout/', views.logoutUser, name='logout'),
    path('signup/', views.signup, name='signup'),
]