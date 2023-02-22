from django.urls import path
from . import views

urlpatterns = [
    path("course/", views.CoursesView.as_view()),
    path("course/signup/<str:id_course>/", views.registerInCourse.as_view()),
    path("course/my_courses/", views.MyCoursesStudent.as_view()),
    path("course/teacher/my_courses/", views.MyCoursesTeacher.as_view()),
]