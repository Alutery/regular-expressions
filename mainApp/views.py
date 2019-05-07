from django.shortcuts import render
from django.contrib import auth

# Create your views here.
def index(request):
	args = {}
	if request.user.is_authenticated:
		args['username'] = request.user.username
	return render(request, 'mainApp/home.html', args)
