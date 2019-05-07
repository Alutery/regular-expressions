from django import forms
from django.contrib.auth.models import User
from . import models

class UserCreationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')

class ProfileForm(forms.ModelForm):
    class Meta:
        model = models.Profile
        fields = ('comletedquestionsID')