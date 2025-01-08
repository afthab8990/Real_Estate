from django.urls import path
from .views import *

urlpatterns = [
    path('api/property',propertyApiView.as_view(),name="property"),
]
