from django.db import models
# from django.contrib.auth.models import User
# from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models.signals import post_save  # very commonly used
from django.dispatch import receiver  # goes with post_save and other signals
from rest_framework.authtoken.models import Token


EXTRA_FUN = 'Extra fun'
PERSONAL_NEED = 'Personal need'
BIG_TRIP = 'Big trip'
HELP_OTHERS = 'Help others'
OTHER = 'Other'

class Location(models.Model):
    city = models.CharField(max_length=30)

    def __str__(self):
        return self.city


class Category(models.Model):
    category = models.CharField(max_length=30, default='', blank=True)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name_plural = "Categories"


class Yardsale(models.Model):
    CHOICES = (
        (EXTRA_FUN, 'Extra fun'),
        (PERSONAL_NEED, 'Personal need'),
        (BIG_TRIP, 'Big trip'),
        (HELP_OTHERS, 'Help others'),
        (OTHER, 'Other'),
        )
    seller = models.ForeignKey(settings.AUTH_USER_MODEL)
    created = models.DateTimeField(auto_now_add=True, null=True)
    cause = models.CharField(choices=CHOICES, max_length=40, null=True)
    name = models.CharField(max_length=35, blank=True, default='')
    description = models.TextField(null=True)
    sale_end = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created']


class Listing(models.Model):
    yardsale = models.ForeignKey(Yardsale, null=True)
    item = models.CharField(max_length=40, default='', blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    photo = models.ImageField(upload_to='listing_photos', verbose_name='Upload a photo', null=True, blank=True)
    category = models.ForeignKey(Category, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    buyer = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='buyer', null=True, blank=True)

    def __str__(self):
        return self.item

    class Meta:
        ordering = ['-created']


# not yet used
class ShoppingCart(models.Model):
    item = models.ForeignKey(Listing)
    total = models.DecimalField(max_digits=10, decimal_places=2)
