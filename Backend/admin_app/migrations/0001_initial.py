# Generated by Django 5.1.1 on 2025-01-07 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyType', models.CharField(max_length=25)),
                ('propertyName', models.CharField(max_length=50)),
                ('propertyAddress', models.CharField(max_length=250)),
                ('propertyPricing', models.FloatField()),
            ],
        ),
    ]
