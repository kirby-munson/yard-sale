from rest_framework import serializers
from main_app.models import Location, Category, Listing, Yardsale
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ('id', 'city')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'category')


class ListingSerializer(serializers.ModelSerializer):
    # yardsale = serializers.PrimaryKeyRelatedField(read_only=True)
    # location = serializers.SerializerMethodField()
    #
    # def get_location(self, object):
    #     return object.yardsale.location.city

    class Meta:
        model = Listing
        fields = ('id', 'yardsale', 'item', 'description', 'photo', 'price', 'category', 'buyer')


# class SpecialSaleSerializer(serializers.ModelSerializer):
#     seller = serializers.PrimaryKeyRelatedField(read_only=True)
#     location = serializers.SerializerMethodField()
#
#     def get_location(self, object):
#         return object.seller.location.city
#
#     class Meta:
#         model = SpecialSale
#         fields = ('id', 'special_sale_name', 'special_sale_category',
#         'special_sale_description', 'item', 'description', 'photo', 'price',
#         'seller', 'location', 'category')


class YardsaleSerializer(serializers.ModelSerializer):
    seller = serializers.PrimaryKeyRelatedField(read_only=True)
    location = serializers.SerializerMethodField()

    def get_location(self, object):
        return object.seller.location.city

    class Meta:
        model = Yardsale
        fields = ('id', 'seller', 'cause', 'name', 'location', 'description', 'sale_end')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email_address', 'first_name', 'last_name',
                    'street_address', 'photo', 'location', 'yardsale_set')  # 'yardsale_set'


class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email_address', 'password', 'first_name', 'last_name', 'photo', 'location', 'street_address')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email_address=validated_data['email_address'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            photo=validated_data['photo'],
            location =validated_data['location'],
            street_address =validated_data['street_address'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
