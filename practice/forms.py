from django import forms

class CheckEquivalence(forms.Form):
    input_regex = forms.CharField(max_length=100)