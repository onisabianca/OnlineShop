from sqlite3 import IntegrityError
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from datetime import datetime, timedelta
import re

from RealEstateApp.models import User,Property,Visit
from RealEstateApp.serializers import UserSerializer,PropertySerializer,VisitSerializer
import json

# Create your views here.

@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        users=User.objects.all()
        users_serializer=UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data, safe=False)
    elif request.method=='POST' and request.path=='/user/login':
        user_data=JSONParser().parse(request)
        user = get_user_by_email_and_password(user_data['Email'], user_data['Password'])
        user_serializer=UserSerializer(user,many=False)
        if(user):
            return JsonResponse(user_serializer.data, safe=False)
        else:
            return JsonResponse('', safe=False)
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        users_serializer=UserSerializer(data=user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("User added!", safe=False)
        return JsonResponse("Failed to add user!", safe=False)
    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user=User.objects.get(UserId=id)
        users_serializer=UserSerializer(user,data=user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            updated_user = users_serializer.data
            return JsonResponse(updated_user, safe=False)
        return JsonResponse("Failed to update user!", safe=False)
    elif request.method=='DELETE':
        user=User.objects.get(UserId=id)
        user.delete()
        return JsonResponse("User deleted!", safe=False)
    
@csrf_exempt
def get_user_by_email_and_password(email, password):
    try:        
        user = User.objects.get(Email=email)
        if user.Password == password:
            return user
    except User.DoesNotExist:
        pass
    return None
    
@csrf_exempt
def propertyApi(request,id=0):
    if request.method=='GET' and re.search(r"/property/\d+", request.path):
        try:
            visits=Visit.objects.filter(PropertyId=re.search(r"/property/(\d+)", request.path).group(1))
            visits_serializer=VisitSerializer(visits, many=True)
            return JsonResponse(visits_serializer.data, safe=False)
        except Visit.DoesNotExist:
            return JsonResponse("No visits booked!", safe=False)
    elif request.method=='GET':
        properties=Property.objects.all()
        properties_serializer=PropertySerializer(properties,many=True)
        return JsonResponse(properties_serializer.data, safe=False)
    elif request.method=='POST':
        property_data=JSONParser().parse(request)
        properties_serializer=PropertySerializer(data=property_data)
        if properties_serializer.is_valid():
            properties_serializer.save()
            return JsonResponse("Property added!", safe=False)
        return JsonResponse("Failed to add property!", safe=False)
    elif request.method=='PUT':
        property_data=JSONParser().parse(request)
        property=Property.objects.get(PropertyId=id)
        properties_serializer=PropertySerializer(property,data=property_data)
        if properties_serializer.is_valid():
            properties_serializer.save()
            return JsonResponse("Property updated!", safe=False)
        return JsonResponse("Failed to update property!", safe=False)
    elif request.method=='DELETE':
        property=Property.objects.get(PropertyId=id)
        property.delete()
        return JsonResponse("Property deleted!", safe=False)
    
@csrf_exempt
def visitApi(request,id=0):
    if request.method=='GET':
        visits=Visit.objects.all()
        visits_serializer=VisitSerializer(visits,many=True)
        return JsonResponse(visits_serializer.data, safe=False)
    elif request.method=='POST':
        json_parser = JSONParser()
        json_parser.date_formats = ['%d-%m-%Y']
        visit_data=json_parser.parse(request)
        visits_serializer=VisitSerializer(data=visit_data)
        if visits_serializer.is_valid():
            try:
                visits_serializer.save()
                return JsonResponse("Visit added!", safe=False)
            except Exception:
                return JsonResponse("Time ocuppied!", safe=False)
        else:
            time_str = visit_data['Hour']
            time_obj = datetime.strptime(time_str, '%H:%M')

            max_time = datetime.strptime('17:00', '%H:%M')
            while time_obj < max_time:
                time_obj += timedelta(hours=1)
                # Convert the datetime object back to a time string
                new_time_str = datetime.strftime(time_obj, '%H:%M')

                visit_data['Hour'] = new_time_str
                visits_serializer=VisitSerializer(data=visit_data)
                if visits_serializer.is_valid():
                    return JsonResponse("The next available hour is: " + visit_data['Hour'], safe=False, status=200)
        return JsonResponse("Failed to add visit!", safe=False)
    elif request.method=='PUT':
        json_parser = JSONParser()
        json_parser.date_formats = ['%d-%m-%Y']  
        visit_data=JSONParser().parse(request)
        visit=Visit.objects.get(VisitId=id)
        visits_serializer=VisitSerializer(visit,data=visit_data)
        if visits_serializer.is_valid():
            visits_serializer.save()
            return JsonResponse("Visit updated!", safe=False)
        return JsonResponse("Failed to update visit!", safe=False)
    elif request.method=='DELETE':
        visit=Visit.objects.get(VisitId=id)
        visit.delete()
        return JsonResponse("Visit deleted!", safe=False)