from rest_framework import serializers
from .models import property

class propertySlzr(serializers.Serializer):
    class Meta:
        model = property
        fields= '__all__'
