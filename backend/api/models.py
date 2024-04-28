from django.db import models

# Create your models here.
class Categories(models.Model):
    cat_name = models.CharField(max_length=255)

class User(models.Model):
    user_propel_id = models.CharField(max_length=255)
    user_propel_metadata = models.JSONField(default=dict)
    user_password = models.CharField(max_length=255, default="")