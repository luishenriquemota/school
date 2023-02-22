from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser




class User(AbstractUser):
  id         = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
  email      = models.EmailField(max_length=125, unique=True, null=False)
  is_teacher = models.BooleanField(default=False)
  ...
