from rest_framework import serializers

from quiz.models import Option, Question, Quiz


class QuizSerializer(serializers.ModelSerializer):

    host = serializers.SerializerMethodField()

    class Meta:
        model = Quiz
        fields = "__all__"
        read_only_fields = ["host", "id"]

    def get_host(self, obj):
        return obj.host.username


class OptionSerializer(serializers.ModelSerializer):

    text = serializers.CharField()

    class Meta:
        model = Option
        fields = "__all__"


class ListSerializer(serializers.Serializer):

    value = serializers.CharField()


class QuestionSerializer(serializers.ModelSerializer):

    quiz = serializers.SerializerMethodField()
    options = serializers.ListSerializer(child=serializers.CharField())
    answer = serializers.CharField()

    class Meta:
        model = Question
        fields = "__all__"
        ready_only_fields = ["quiz", "id"]

    def get_quiz(self, obj):
        return obj

    def validate(self, attrs):
        return super().validate(attrs)

    def create(self, validated_data):
        quiz = validated_data.pop("quiz")

        question = validated_data.pop("question")
        options = validated_data.pop("options")
        answer = validated_data.pop("answer")

        quiz.add_question(question, options, answer)

        return super().create(validated_data)
