from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework.authtoken.views import Token
from rest_framework.views import APIView, Request, Response, status

from utils.mixins import SerializerByMethodMixin

from .models import User
from .serializers import (LoginUserSerializer, UserSerializer,
                          UserSerializerList, UserTeacherSerializer)


class UserView(SerializerByMethodMixin ,generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_map = {
    "POST": UserSerializer,
    "GET": UserSerializerList
  }


class UserTeacherView(generics.CreateAPIView):
  serializer_class = UserTeacherSerializer


class LoginView(APIView):

  def post(self, request: Request) -> Response:
      serializer = LoginUserSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)

      user = authenticate(
          username=serializer.validated_data["username"],
          password=serializer.validated_data["password"],
      )

      if not user:
          return Response({"detail": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)

      token, _ = Token.objects.get_or_create(user=user)

      return Response({"token": token.key})



