from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class QuestionCategory(models.Model):
    name = models.CharField(max_length=30)
    questionsnumber = models.IntegerField(default=5)
    
class ComletedQuestions(models.Model):
    categoryID = models.ForeignKey(
        QuestionCategory, 
        on_delete=models.CASCADE,
        verbose_name="related category",
    )
    questionresults = models.CharField(max_length=20)

    @property
    def answers(self):
        "Returns the user's results."
        return [i == 1 for i in self.questionresults]

# Extending User Model Using a One-To-One Link
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    comletedquestionsID = models.ForeignKey(
        ComletedQuestions,
        on_delete=models.CASCADE, # При удалении ссылочного объекта также удаляются объекты, на которые есть ссылки 
        verbose_name="related comleted questions",
    )

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()





    
