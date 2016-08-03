from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.timezone import now
from django.contrib.auth.models import BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    def create_user(self, email_address, password=None, **kwargs):
        email_address = self.normalize_email(email_address)
        user = self.model(email_address=email_address, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, **kwargs):
        user = self.create_user(**kwargs)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    location = models.ForeignKey('main_app.Location', null=True, blank=True)
    email_address = models.EmailField(max_length=45, unique=True)
    street_address = models.TextField()
    phone = models.CharField(max_length=14)
    photo = models.ImageField(upload_to='profile_images', null=True, blank=True, verbose_name='Upload a photo')
    is_staff = models.BooleanField('staff status', default=False,
        help_text='Designates whether the user can log into this admin site.')
    is_active = models.BooleanField('active', default=True,
        help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.')
    date_joined = models.DateTimeField('date joined', default=now)

    USERNAME_FIELD = 'email_address'
    objects = UserManager()
    def get_full_name(self):
         return self.first_name

    def get_short_name(self):
         return self.last_name

    @property
    def photo_url(self):
        if self.photo:
            return self.photo.url
        return 'http://cache1.asset-cache.net/gc/499060099-silhouette-of-fashion-girls-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=M1WaA%2BMWPJUr3hK%2F6zzzX5TIop2kRCYnewKalQna8ZBT%2BbVwpUDAEifKrtnF2FhQ'


    def __str__(self):
        return self.email_address

    # class Meta:
    #     ordering = ['-created']
