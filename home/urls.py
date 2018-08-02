from django.conf.urls import url, include
from django.contrib import admin
from home import views

urlpatterns = [
    url(r'^$', views.about, name='about'),
    url(r'^tarif/$', views.tarif, name='tarif'),
    url(r'^cars/$', views.cars, name='cars'),
    url(r'^services/$', views.services, name='services'),
    url(r'^contacts/$', views.contacts, name='contacts'),

]
