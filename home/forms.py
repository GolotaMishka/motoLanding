from django import forms
from .models import *


class SubscriberForm(forms.ModelForm):
    name = forms.CharField(required=True)
    phone_number = forms.CharField(required=True)

    class Meta:
        model = Subscriber
        exclude = [""]


