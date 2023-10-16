from django.urls import re_path
from RealEstateApp import views

urlpatterns=[
    re_path(r'^user$',views.userApi),
    re_path(r'^user/([0-9]+)$', views.userApi),

    re_path(r'^property$',views.propertyApi),
    re_path(r'^property/([0-9]+)$', views.propertyApi),

    re_path(r'^visit$',views.visitApi),
    re_path(r'^visit/([0-9]+)$', views.visitApi),

    re_path(r'^user/login$', views.userApi)
]