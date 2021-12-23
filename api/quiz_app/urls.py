from django.contrib import admin
from django.urls import path, include
from django.urls.conf import re_path

from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title="Quiz API Documentation")

urlpatterns = [
    path("admin/", admin.site.urls),
    # api docs
    re_path(r"^docs/", schema_view),
    path("", include("accounts.urls")),
]
