from django.db import models

class React(models.Model):
    employee = models.CharField(max_length = 100)
    department = models.CharField(max_length = 200)