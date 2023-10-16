from rest_framework import serializers
from RealEstateApp.models import User,Property,Visit

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('UserId', 'Email', 'Password', 'Role', 'Name', 'Telephone', 'Address', 'Interest')

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model=Property
        fields=('PropertyId', 'Type', 'Price', 'Location', 'Dimension', 'Operation', 'Details', 'Image')

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model=Visit
        fields=('VisitId', 'PropertyId', 'UserId', 'Date', 'Hour')