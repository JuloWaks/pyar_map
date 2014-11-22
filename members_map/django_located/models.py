from django.contrib.gis.db import models
from django.contrib import admin

# Create your models here.
class Position(models.Model):
    point = models.PointField()
    created_date = models.DateTimeField(auto_now=False)


class Location(models.Model):

    current_position = models.ForeignKey(to=Position)

    last_change = models.DateTimeField(auto_now=False)

    class Meta:

        abstract = True

admin.site.register(Position)
