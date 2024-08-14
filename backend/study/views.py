from django.db.models import Avg
from rest_framework.viewsets import ReadOnlyModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

from study import models, serializers


class TaskViewSet(ReadOnlyModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer
    permission_classes = [IsAuthenticated]
    
    def get_serializer_class(self):
        if self.request.user.is_student():
            self.queryset = models.Task.objects.filter(assignments__student=self.request.user)
            return serializers.DetailTaskSerializer
        if self.request.user.is_mentor():
            return serializers.TaskSerializer
        if self.request.user.is_superuser:
            return serializers.TaskSerializer
        return super().get_serializer_class()


class UsersViewSet(ViewSet):
    queryset = models.UserAccount.objects.filter(student_profile__isnull=False)
    serializer_class = serializers.LeaderBoardSerializer
    permission_classes = [IsAuthenticated]
    
    @action(methods=['GET'], detail=False)
    def leaderboard(self, request):
        students_qs = self.queryset.prefetch_related(
            'assignments', 'assignments__task'
        ).annotate(
            rating=Avg('assignments__mentor_grade'),
        ).order_by('-rating')

        serializer = self.serializer_class(students_qs, many=True)
        
        return Response(data=serializer.data)
