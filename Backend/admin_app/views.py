from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import propertySlzr
from .models import property

class propertyApiView(APIView):
    def get(self,request):
        properties = property.objects.all()
        serializer = propertySlzr(properties,many= True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = propertySlzr(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


    
    



# Create your views here.
