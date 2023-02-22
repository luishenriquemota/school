from django.urls import path
from . import views

urlpatterns = [
    path("user/", views.UserView.as_view()),
    path("user/teacher/", views.UserTeacherView.as_view()),
    path("user/login/", views.LoginView.as_view()),
]
