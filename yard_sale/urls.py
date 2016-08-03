from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static  # for photos
from django.conf import settings  # for photos
# from rest_framework.authtoken import views


from main_app.views import (IndexView, LocationListAPIView,
    LocationDetailAPIView, CategoryListAPIView, CategoryDetailAPIView,
    ListingListAPIView, ListingDetailAPIView, UserRegisterAPIView,
    CurrentUserAPIView, YardsaleListAPIView, YardsaleDetailAPIView)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('django.contrib.auth.urls')),
    # url(r'^accounts/', include('authtools.urls')),
    url(r'^$', IndexView.as_view(), name='index_view'),

    url(r'api/register/$', UserRegisterAPIView.as_view(), name='user_register_api_view'),
    url(r'api/currentuser/$', CurrentUserAPIView.as_view(), name='user_current_api_view'),
    url(r'api/locations/$', LocationListAPIView.as_view(), name='location_list_api_view'),
    url(r'api/locations/(?P<pk>\d+)/$', LocationDetailAPIView.as_view(), name='location_detail_api_view'),
    url(r'api/categories/$', CategoryListAPIView.as_view(), name='category_list_api_view'),
    url(r'api/categories/(?P<pk>\d+)/$', CategoryDetailAPIView.as_view(), name='category_detail_api_view'),
    url(r'api/listings/$', ListingListAPIView.as_view(), name='listing_list_api_view'),
    # url(r'api/listings/create/(?P<pk>\d+)/$', ListingListAPIView.as_view(), name='listing_list_api_view'),
    url(r'api/listings/(?P<pk>\d+)/$', ListingDetailAPIView.as_view(), name='listing_detail_api_view'),
    # url(r'api/special/$', SpecialSaleListAPIView.as_view(), name='special_sale_list_api_view'),
    # url(r'api/special/(?P<pk>\d+)/$', SpecialSaleDetailAPIView.as_view(), name='special_sale_detail_api_view'),
    # url(r'api/users/$', UserListAPIView.as_view(), name='user_list_api_view'),
    # url(r'api/users/(?P<pk>\d+)/$', UserDetailAPIView.as_view(), name='user_detail_api_view'),
    url(r'api/yardsales/$', YardsaleListAPIView.as_view(), name='yardsale_list_view'),
    url(r'api/yardsales/(?P<pk>\d+)$', YardsaleDetailAPIView.as_view(), name='yardsale_detail_view'),
    # url(r'api/special/all/$', AllSpecialSaleListAPIView.as_view(), name='all_special_sale_list_api_view'),
    # url(r'api/listings/all/$', AllListingListAPIView.as_view(), name='all_listing_list_api_view'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
