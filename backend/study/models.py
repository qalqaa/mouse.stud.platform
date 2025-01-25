from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email required!')
        email = self.normalize_email(email)
        user = self.model(email=email,  **extra_fields)
        user.is_active = True
        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email required!')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.is_superuser = 1
        user.is_staff = 1
        user.save()
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    objects = UserAccountManager()
    email = models.EmailField(max_length=100, unique=True)
    username = models.CharField(verbose_name='Никнейм', unique=True, max_length=128)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD = 'email'
    
    
    def is_mentor(self):
        try:
            if self.mentor_profile:
                return True
        except:
            pass
        return False
    
    def is_student(self):
        try:
            if self.student_profile:
                return True
        except:
            pass
        return False

    def __str__(self):
        return self.username


class MentorProfile(models.Model):
    user = models.OneToOneField(
        UserAccount,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
        related_name='mentor_profile'
    )


class StudentProfile(models.Model):
    user = models.OneToOneField(
        UserAccount,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
        related_name='student_profile'
    )
    
    
class Course(models.Model):
    name = models.CharField(max_length=128 ,unique=True)
    
    def __str__(self) -> str:
        return self.name


class Task(models.Model):
    ACTIVE = 'active'
    ARCHIVED = 'archived'
    FUTURE = 'future'
    
    STATUS_CHOICES = (
        (ACTIVE, ACTIVE),
        (ARCHIVED, ARCHIVED),
        (FUTURE, FUTURE),
    )
    
    title = models.CharField('Заголовок задания', max_length=255, unique=True)
    description = models.TextField('Описание задания')
    status = models.CharField('Статус задания', max_length=64, choices=STATUS_CHOICES)
    starts = models.DateField('Открывается')
    ends = models.DateField('Дедлайн')
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курс'
    )
    
    def __str__(self) -> str:
        return self.title


class Assignment(models.Model):
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        related_name='assignments',
        verbose_name='задание'
    )
    student = models.ForeignKey(
        UserAccount,
        on_delete=models.CASCADE,
        related_name='assignments',
        verbose_name='ученик'
    )
    mentor_grade = models.PositiveIntegerField(
        verbose_name='Оценка ментора',
        null=True,
        blank=True
    )
    pr_link = models.CharField(
        'Ссылка на pull request',
        max_length=512,
        null=True,
        blank=True
    )
    
    def __str__(self) -> str:
        return f'{self.task} {self.student}'
