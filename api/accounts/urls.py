from django.urls import path

from accounts.api import (
    DashboardUserAPI,
    LoginUserAPI,
    LogoutUserAPI,
    ProfileUserAPI,
    RegisterUserAPI,
)

app_name = "accounts"

urlpatterns = [
    path("accounts/login/", LoginUserAPI.as_view(), name="login"),
    path("accounts/logout/", LogoutUserAPI.as_view(), name="logout"),
    path("accounts/register/", RegisterUserAPI.as_view(), name="register"),
    path("accounts/logout/", LogoutUserAPI.as_view(), name="logout"),
    path("accounts/dashboard/", DashboardUserAPI.as_view(), name="dashboard"),
    path("accounts/", ProfileUserAPI.as_view(), name="profile"),
]
