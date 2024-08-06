from django.contrib import admin

from study import models

admin.site.register(models.UserAccount)
admin.site.register(models.Course)
admin.site.register(models.Assignment)
admin.site.register(models.MentorProfile)
admin.site.register(models.StudentProfile)
admin.site.register(models.Task)
