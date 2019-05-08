# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

# from django.db import models
# from django.db.models.signals import post_save
# from django.dispatch import receiver

# """Declare models for YOUR_APP app."""

# from django.contrib.auth.models import AbstractUser, BaseUserManager ## A new class is imported. ##
# from django.db import models
# from django.utils.translation import ugettext_lazy as _

# from django.db import models
# from django.contrib.auth.models import User
# from django.db.models.signals import post_save
# from django.dispatch import receiver


# class QuestionCategory(models.Model):
#     name = models.CharField(max_length=30)
#     questionsnumber = models.IntegerField(default=5)
    
# class ComletedQuestions(models.Model):
#     categoryID = models.ForeignKey(
#         QuestionCategory, 
#         on_delete=models.CASCADE,
#         verbose_name="related category",
#     )
#     questionresults = models.CharField(max_length=20)

#     @property
#     def answers(self):
#         "Returns the user's results."
#         return [i == 1 for i in self.questionresults]

# # Extending User Model Using a One-To-One Link
# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     comletedquestionsID = models.ForeignKey(
#         ComletedQuestions,
#         on_delete=models.CASCADE, # При удалении ссылочного объекта также удаляются объекты, на которые есть ссылки 
#         verbose_name="related comleted questions",
#     )

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()





    


# class UserManager(BaseUserManager):
# 	"""Define a model manager for User model with no username field."""

# 	use_in_migrations = True

# 	def _create_user(self, email, password, **extra_fields):
# 		"""Create and save a User with the given email and password."""
# 		if not email:
# 			raise ValueError('The given email must be set')
# 		email = self.normalize_email(email)
# 		user = self.model(email=email, **extra_fields)
# 		user.set_password(password)
# 		user.save(using=self._db)
# 		return user

# 	def create_user(self, email, password=None, **extra_fields):
# 		"""Create and save a regular User with the given email and password."""
# 		extra_fields.setdefault('is_staff', False)
# 		extra_fields.setdefault('is_superuser', False)
# 		return self._create_user(email, password, **extra_fields)

# 	def create_superuser(self, email, password, **extra_fields):
# 		"""Create and save a SuperUser with the given email and password."""
# 		extra_fields.setdefault('is_staff', True)
# 		extra_fields.setdefault('is_superuser', True)

# 		if extra_fields.get('is_staff') is not True:
# 			raise ValueError('Superuser must have is_staff=True.')
# 		if extra_fields.get('is_superuser') is not True:
# 			raise ValueError('Superuser must have is_superuser=True.')

# 		return self._create_user(email, password, **extra_fields)


# class User(AbstractUser):
# 	"""User model."""

# 	username = None
# 	email = models.EmailField(_('email address'), unique=True)

# 	USERNAME_FIELD = 'email'
# 	REQUIRED_FIELDS = []

# 	objects = UserManager()