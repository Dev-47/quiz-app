from rest_framework.generics import GenericAPIView as View, get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from quiz.models import Quiz
from quiz.serializers import QuestionSerializer, QuizSerializer


class QuizCreateAPI(View):

    permission_class = [IsAuthenticated]
    serializer_class = QuizSerializer

    def post(self, request):
        quiz_data = request.data

        quiz_create_serializer = self.get_serializer(data=quiz_data)
        quiz_create_serializer.is_valid(raise_exception=True)
        quiz_create_serializer.save(host=request.user)

        return Response(quiz_create_serializer.data)


class QuizUpdateAPI(View):

    permission_class = [IsAuthenticated]
    serializer_class = QuizSerializer

    def post(self, request, uuid):
        quiz = get_object_or_404(Quiz, id=uuid)
        quiz_data = request.data

        quiz_update_serializer = self.get_serializer(quiz, data=quiz_data, partial=True)
        quiz_update_serializer.is_valid(raise_exception=True)
        quiz_update_serializer.save(host=request.user)

        return Response(quiz_update_serializer.data)


class QuizListAPI(View):

    serializer_class = QuizSerializer
    queryset = Quiz.objects.order_by("-updated")

    def get(self, request):
        quiz_list_serializer = self.get_serializer(self.get_queryset(), many=True)

        return Response(quiz_list_serializer.data)


class QuizDetailsAPI(View):

    serializer_class = QuizSerializer

    def get(self, request, uuid):
        quiz = get_object_or_404(Quiz, id=uuid)

        quiz_serializer = self.get_serializer(quiz)

        return Response(quiz_serializer.data)


class QuizDeleteAPI(View):

    permission_class = [IsAuthenticated]

    def get(self, request, uuid):
        quiz = get_object_or_404(Quiz, id=uuid)
        quiz.delete()

        return Response({"success": "Quiz Deleted !!!"})


class AddQuestionAPI(View):

    permission_class = [IsAuthenticated]
    serializer_class = QuestionSerializer

    def post(self, request, uuid):
        quiz = get_object_or_404(Quiz, id=uuid)

        question_data = request.data
        question_add_serializer = self.get_serializer(data=question_data)
        question_add_serializer.is_valid(raise_exception=True)
        question_add_serializer.save(quiz=quiz)

        return Response(question_add_serializer.data)
