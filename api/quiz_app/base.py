from django.db import models
import uuid

from rest_framework import serializers


class BaseModel(models.Model):

    id = models.UUIDField(default=uuid.uuid4(), primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
