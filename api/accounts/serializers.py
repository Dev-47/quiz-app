from rest_framework import serializers

from accounts.models import User


class RegisterUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email", "password"]

    def create(self, validated_data):
        password = validated_data.pop("password")

        obj = User.objects.create(**validated_data)
        obj.set_password(password)
        obj.save()

        return obj


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ["id", "password"]
