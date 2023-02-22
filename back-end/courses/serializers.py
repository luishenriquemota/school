from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
  class Meta:
    model = Course
    fields = "__all__"
    read_only_fields = ["teacher"]
    

class registerInCourseSerializer(serializers.ModelSerializer):

  class Meta:
    model = Course 
    fields = "__all__"
    