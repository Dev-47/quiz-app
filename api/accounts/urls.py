from django.urls import path

# jwt token views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from accounts.api import (
    DashboardUserAPI,
    LogoutUserAPI,
    ProfileUserAPI,
    RegisterUserAPI,
)

app_name = "accounts"

urlpatterns = [
    # jwt token endpoints
    path("accounts/login/", TokenObtainPairView.as_view(), name="login"),
    path("accounts/refresh-token/", TokenRefreshView.as_view(), name="refresh-token"),
    path("accounts/logout/", LogoutUserAPI.as_view(), name="logout"),
    path("accounts/register/", RegisterUserAPI.as_view(), name="register"),
    path("accounts/logout/", LogoutUserAPI.as_view(), name="logout"),
    path("accounts/dashboard/", DashboardUserAPI.as_view(), name="dashboard"),
    path("accounts/", ProfileUserAPI.as_view(), name="profile"),
]
