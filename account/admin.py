from django.contrib import admin
from .models import CustomUser

class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'location']
    search_fields = ['last_name', 'location']

admin.site.register(CustomUser, UserAdmin)
