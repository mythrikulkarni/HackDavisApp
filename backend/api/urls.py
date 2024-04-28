#Comment
from django.urls import path
from api import views

urlpatterns = [
    path('user_auth/', views.user_auth, name='user_auth'),
    path('user_config/', views.user_config, name='user_config'),
    path('user_question/', views.user_question, name="user_question")
]