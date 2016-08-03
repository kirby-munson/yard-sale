from django.contrib import admin

from main_app.models import Location, Category, Listing, Yardsale


class ListingAdmin(admin.ModelAdmin):
    list_display = ['item', 'yardsale', 'price', 'created']


admin.site.register(Location)
admin.site.register(Category)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Yardsale)
