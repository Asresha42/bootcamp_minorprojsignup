from django.urls import path

from .import views

urlpatterns = [
    path('', views.signup, name="display"),
    path('submit/', views.submitUser, name="submit")
]
