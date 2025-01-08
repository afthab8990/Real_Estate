from django.db import models

class property(models.Model):
    propertyType = models.CharField(max_length=25)
    propertyName = models.CharField(max_length=50)
    propertyAddress = models.CharField(max_length=250)
    propertyPricing = models.FloatField()

    def __str__(self):
        return self.propertyName
    
# Create your models here.
