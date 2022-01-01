from rest_framework import serializers

from quiz.models import Option, Question, Quiz


class QuizSerializer(serializers.ModelSerializer):

    host = serializers.SerializerMethodField()
    questions = serializers.SerializerMethodField()

    class Meta:
        model = Quiz
        fields = "__all__"
        read_only_fields = ["host", "id"]

    def get_host(self, obj):
        return obj.host.username

    def get_questions(self, obj):
        return QuestionSerializer(obj.questions, many=True).data


class OptionSerializer(serializers.ModelSerializer):

    text = serializers.CharField()

    class Meta:
        model = Option
        fields = "__all__"
        read_only_fields = ["text", "id"]


class ListSerializer(serializers.Serializer):

    value = serializers.CharField()


class QuestionSerializer(serializers.ModelSerializer):

    quiz = serializers.SerializerMethodField()
    options = serializers.ListSerializer(child=serializers.CharField())
    answer = serializers.CharField(write_only=True)

    class Meta:
        model = Question
        fields = "__all__"
        ready_only_fields = ["quiz", "id"]

    def get_quiz(self, obj):
        return obj.quiz.title

    def create(self, validated_data):
        quiz = validated_data.pop("quiz")

        question = validated_data.pop("question")
        options = validated_data.pop("options")
        answer = validated_data.pop("answer")

        return quiz.add_question(question, options, answer)


class SubmitQuestionSerializer(serializers.Serializer):

    question_uuid = serializers.UUIDField()
    answer = serializers.CharField()
