#Comment
from django.urls import path
from api import views

urlpatterns = [
    path('user_auth/', views.user_auth, name='user_auth'),
]