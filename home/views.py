from django.shortcuts import render
from .forms import *

def about(request):

    return render(request, 'landing/about.html', locals())

def cars(request):


    return render(request, 'landing/cars.html', locals())

def services(request):




    return render(request, 'landing/services.html', locals())





def tarif(request):



    return render(request, 'landing/tarif.html', locals())



def contacts(request):

    form = SubscriberForm(request.POST or None)

    if request.method == "POST" and form.is_valid():
        print (request.POST)
        print (form.cleaned_data)
        data  = form.cleaned_data
        print (data["name"])


        new_form = form.save()

    return render(request, 'landing/contacts.html', locals())




