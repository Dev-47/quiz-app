from django.db import models
from django.utils import timezone

from quiz_app.base import BaseModel
from accounts.models import User


class Quiz(BaseModel):

    host = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=False)
    duration = models.DurationField(default=timezone.timedelta(minutes=10))
    enable_time = models.BooleanField(default=False)
    enable_negative_marking = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def add_question(self, question, options, answer):
        # filter answer from options or create a new one
        __answer_qs = Option.objects.filter(text=answer)
        __answer = __answer_qs.first()

        if not __answer_qs.exists():
            __answer = Option.objects.create(text=answer)
            __answer.save()

        __question = Question.objects.create(
            quiz=self, question=question, answer=__answer
        )
        __question.save()
        __question.add_options(*options)

        return __question

    def mark_quiz_user(self, user, questions):
        return {"score": "40%", "summary": "4 out 10"}

    @property
    def questions(self):
        questions = Question.objects.filter(quiz_id=self.id)
        return questions


class Option(BaseModel):

    text = models.TextField(blank=False)

    def __str__(self):
        return self.text


class Question(BaseModel):

    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question = models.TextField(blank=False)
    options = models.ManyToManyField(Option, related_name="option")
    answer = models.ForeignKey(Option, related_name="answer", on_delete=models.CASCADE)

    def __str__(self):
        return self.question

    def add_options(self, *texts):
        for text in texts:
            option_qs = Option.objects.filter(text=text)
            option = option_qs.first()

            if not option_qs.exists():
                option = Option.objects.create(text=text)

            self.options.add(option)
