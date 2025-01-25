from djoser import serializers as dj_serializers
from django.db.models import Sum
from django.db.models.functions import Lower
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


class LeaderBoardSerializer(serializers.ModelSerializer):
    rating = serializers.SerializerMethodField()
    assignments_grades = serializers.SerializerMethodField()
    
    def get_rating(self, object):
        return object.assignments.aggregate(sum=Sum('mentor_grade'))['sum']
    
    def get_assignments_grades(self, object):
        return object.assignments.values('task_id', 'mentor_grade', title=Lower('task__title'))
    
    class Meta:
        model = models.UserAccount
        fields = (
            'rating',
            'username',
            'assignments_grades'
        )
