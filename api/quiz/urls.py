from django.urls import path

from quiz.api import (
    AddQuestionAPI,
    QuizCreateAPI,
    QuizListAPI,
    QuizDetailsAPI,
    QuizDeleteAPI,
    QuizUpdateAPI,
    UserSubmitQuizAPI,
)


app_name = "quiz"

urlpatterns = [
    path("quiz/create/", QuizCreateAPI.as_view(), name="create"),
    path("quiz/list/", QuizListAPI.as_view(), name="list"),
    path("quiz/<uuid:uuid>/details/", QuizDetailsAPI.as_view(), name="details"),
    path("quiz/<uuid:uuid>/delete/", QuizDeleteAPI.as_view(), name="delete"),
    path("quiz/<uuid:uuid>/update/", QuizUpdateAPI.as_view(), name="update"),
    path(
        "quiz/<uuid:uuid>/add-question/", AddQuestionAPI.as_view(), name="add-question"
    ),
    path("quiz/<uuid:uuid>/submit/", UserSubmitQuizAPI.as_view(), name="submit"),
]
