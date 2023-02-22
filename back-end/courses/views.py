from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication

from .models import Course
from .serializers import CourseSerializer, registerInCourseSerializer
from .permissions import TeacherPermission



class CoursesView(generics.ListCreateAPIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticatedOrReadOnly, TeacherPermission]

  serializer_class = CourseSerializer
  queryset = Course.objects.all()


  def perform_create(self, serializer):
    return serializer.save(teacher=self.request.user)


class registerInCourse(generics.UpdateAPIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

  serializer_class = registerInCourseSerializer
  queryset = Course.objects.all()
  lookup_url_kwarg = "id_course"

  def perform_update(self, serializer):
    course_id = self.kwargs.get('id_course')
    course = get_object_or_404(Course, id = course_id)

    return course.users.add(self.request.user)


class MyCoursesStudent(generics.ListAPIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated]

  serializer_class = CourseSerializer
  queryset = Course.objects.all()

  def get_queryset(self):
    return Course.objects.filter(users = self.request.user)


class MyCoursesTeacher(generics.ListAPIView):
  authentication_classes = [TokenAuthentication]
  permission_classes = [IsAuthenticated, TeacherPermission]

  serializer_class = CourseSerializer
  queryset = Course.objects.all()

  def get_queryset(self):
    return Course.objects.filter(teacher = self.request.user)




