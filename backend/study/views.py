from django.db.models import OuterRef, Subquery
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated

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
