from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from users.models import User
import ipdb


class UserSerializer(serializers.ModelSerializer):
  username = serializers.CharField(
      validators=[UniqueValidator(queryset=User.objects.all(), message="username already exists")]
  )
  email = serializers.CharField(
      validators=[UniqueValidator(queryset=User.objects.all(), message="email already registered")]
  )

  class Meta:
    model = User
    fields = ["id", "username", "email", "password", "is_teacher"]
    read_only_fields = ["id", "is_teacher"]
    extra_kwargs = {"password": {"write_only": True}}

  def create(self, validated_data: dict) -> User:
    user = User.objects.create_user(**validated_data)
    return user


class UserSerializerList(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "username", "email", "is_teacher", "date_joined"]


class UserTeacherSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = ["id", "username", "email", "password", "is_teacher"]
    read_only_fields = ["id", "is_teacher"]
    extra_kwargs = {"password": {"write_only": True}}
  
  def create(self, validated_data: dict) -> User:
    user = User.objects.create_user(**validated_data, is_teacher=True)
    return user


class LoginUserSerializer(serializers.Serializer):
  username    = serializers.CharField(write_only=True)
  password    = serializers.CharField(write_only=True)