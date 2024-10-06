from django.contrib import admin
from django.urls import path, include
from application.yasg import urlpatterns as doc_urls

from study.views import render_spa


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/study/', include('study.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/auth/', include('djoser.social.urls')),
    path('', render_spa)
]

urlpatterns += doc_urls
