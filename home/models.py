from django.db import models
from utils.main import disable_for_loaddata


class Subscriber(models.Model):
    name = models.CharField(max_length=128,default='name')
    phone_number = models.CharField(max_length=12,default='number')
    email = models.EmailField(max_length=70, null=True, blank=True, unique=True)


    def __str__(self):
        return "Подписчик %s %s" % (self.name, self.phone_number)

    class Meta:
        verbose_name = 'Подписчик'
        verbose_name_plural = 'Подписчики'





