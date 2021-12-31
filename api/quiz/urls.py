from django.urls import path

from quiz.api import AddQuestionAPI, QuizCreateAPI, QuizListAPI


app_name = "quiz"

urlpatterns = [
    path("quiz/create/", QuizCreateAPI.as_view(), name="create"),
    path("quiz/list/", QuizListAPI.as_view(), name="list"),
    path(
        "quiz/add-question/<uuid:uuid>/", AddQuestionAPI.as_view(), name="add-question"
    ),
]
