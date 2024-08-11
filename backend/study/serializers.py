from djoser import serializers as dj_serializers
from rest_framework import serializers

from study import models


class MentorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MentorProfile
        fields = '__all__'


class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentProfile
        fields = '__all__'


class UserSerializer(dj_serializers.UserCreateSerializer):
    class Meta:
        model = models.UserAccount
        fields = (
            'id',
            'email',
            'username',
            'mentor_profile',
            'student_profile',
        )


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = '__all__'


class DetailTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = (
            'title',
            'description',
            'status',
            'starts',
            'ends',
            'assignments'
        )
