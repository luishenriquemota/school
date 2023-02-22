from django.db import models
import uuid

# Create your models here.

class Course(models.Model):
  id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
  name = models.CharField(max_length=250, null=False)
  description = models.TextField(null=False)

  teacher = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="my_courses")

  users = models.ManyToManyField("users.User", related_name="courses", blank=True)

