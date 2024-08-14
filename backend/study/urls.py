from rest_framework.routers import DefaultRouter

from study import views

router = DefaultRouter()
router.register('task', views.TaskViewSet, basename='task-view-set')
router.register('users', views.UsersViewSet, basename='users-view-set')

urlpatterns = []
urlpatterns += router.urls
