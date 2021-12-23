from rest_framework.generics import GenericAPIView as View
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from accounts.serializers import RegisterUserSerializer, UserSerializer


class RegisterUserAPI(View):

    serializer_class = RegisterUserSerializer

    def post(self, request):
        user_data = request.data

        user_register_serializer = self.get_serializer(data=user_data)
        user_register_serializer.is_valid(raise_exception=True)
        user_register_serializer.save()

        return Response(user_register_serializer.data)


class LogoutUserAPI(View):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

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
