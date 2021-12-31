from rest_framework.generics import GenericAPIView as View
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout

from accounts.serializers import (
    LoginUserSerializer,
    RegisterUserSerializer,
    UserSerializer,
)


class RegisterUserAPI(View):

    serializer_class = RegisterUserSerializer

    def post(self, request):
        user_data = request.data

        user_register_serializer = self.get_serializer(data=user_data)
        user_register_serializer.is_valid(raise_exception=True)
        user_register_serializer.save()

        return Response(
            {
                "message": "Registration successful",
                "data": user_register_serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )


class LoginUserAPI(View):

    serializer_class = LoginUserSerializer

    def post(self, request):
        user_creds = request.data

        login_serializer = self.get_serializer(data=user_creds)
        login_serializer.is_valid(raise_exception=True)

        username = login_serializer.validated_data.get("username")
        password = login_serializer.validated_data.get("password")

        user = authenticate(username=username, password=password)

        if not user:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        token, _ = Token.objects.get_or_create(user=user)

        return Response({"token": token.key})


class LogoutUserAPI(View):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # refresh_token = request.data["refresh_token"]
            # token = RefreshToken(refresh_token)
            # token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordUserAPI(View):
    pass


class DashboardUserAPI(View):
    pass


class ProfileUserAPI(View):

    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get(self, request):
        user = request.user
        serialized_user = self.get_serializer(user)

        return Response(serialized_user.data)
