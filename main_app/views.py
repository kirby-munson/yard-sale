from django.shortcuts import render
from django.views.generic import TemplateView, ListView

from rest_framework import generics

# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()


from main_app.serializers import (LocationSerializer, CategorySerializer,
    ListingSerializer, CreateUserSerializer, UserSerializer,
    YardsaleSerializer)
from main_app.models import Location, Category, Listing, Yardsale


class IndexView(TemplateView):
    template_name = 'index.html'


class LocationListAPIView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class LocationDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ListingListAPIView(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

    # def perform_create(self, serializer):
    #     serializer.save()


# class AllListingListAPIView(generics.ListCreateAPIView):
#     queryset = Listing.objects.all()
#     serializer_class = ListingSerializer


class ListingDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


# class SpecialSaleListAPIView(generics.ListCreateAPIView):
#     queryset = SpecialSale.objects.all()
#     serializer_class = SpecialSaleSerializer
#
#     def perform_create(self, serializer):
#         serializer.save(seller=self.request.user)


# class AllSpecialSaleListAPIView(generics.ListCreateAPIView):
#     queryset = SpecialSale.objects.all()
#     serializer_class = SpecialSaleSerializer


# class SpecialSaleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = SpecialSale.objects.all()
#     serializer_class = SpecialSaleSerializer


class UserRegisterAPIView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer


# class UserListAPIView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#
#
# class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


class YardsaleListAPIView(generics.ListCreateAPIView):
    queryset = Yardsale.objects.all()
    serializer_class = YardsaleSerializer

    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)


class YardsaleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Yardsale.objects.all()
    serializer_class = YardsaleSerializer


class CurrentUserAPIView(generics.RetrieveUpdateAPIView):
    model = User
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
