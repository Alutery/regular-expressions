from django.shortcuts import render, redirect
from django.contrib import auth
from django.template.context_processors import csrf
from mainApp.models import Profile

def login(request):
    args = {}
    args.update(csrf(request))
    if request.POST:
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            args['login_error'] = 'Пользователь не найден'
            return render(request, 'mainApp/home.html', args)

def logout(request):
    auth.logout(request)
    return redirect('/')

def update_profile(request, user_id):
    user = User.objects.get(pk=user_id)
    user.profile.bio = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    user.save()

def register(request):
    args={}
    args.update(csrf(request))
    args['form'] = UserCreationForm()
    if request.POST:
        newuser_form = UserCreationForm(request.POST)
        if newuser_form.is_valid():
            newuser_form.save()
            newuser = auth.authenticate(username=newuser_form.cleaned_data['username'], password=newuser_form.cleaned_data['password'])
            auth.login(request, newuser)
            return redirect('/')
        else:
            args['form'] - newuser_form
    return render(request, 'mainApp/home.html', args)