from django.db import models
from django.utils import timezone, tree

from quiz_app.base import BaseModel
from accounts.models import User


class Quiz(BaseModel):

    host = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=False)
    duration = models.DurationField(default=timezone.timedelta(minutes=10))
    enable_time = models.BooleanField(default=False)
    enable_negative_marking = models.BooleanField(default=False)

    def add_question(self, question, options, answer):
        __answer = Option.objects.create(text=answer)
        __question = Question.objects.create(
            quiz_id=self.id, question=question, answer=__answer
        )
        __question.add_options(options)
        __question.set_answer(answer)
        __question.save()


class Option(BaseModel):

    text = models.TextField(blank=False, unique=True)


class Question(BaseModel):

    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question = models.TextField(blank=False)
    options = models.ManyToManyField(Option, related_name="option")
    answer = models.ForeignKey(Option, related_name="answer", on_delete=models.CASCADE)

    def add_options(self, *texts):
        for __text in texts:
            option, created = Option.objects.get_or_create(text=__text)
            self.options.add(option)

            if not created:
                option.save()
        self.save()

    def set_answer(self, text):
        option, created = Option.objects.get_or_create(text=text)

        if not created:
            option.save()

        self.answer = option
        self.save()
