from django.urls import path
from .views import UserApiView
from .views import home


urlpatterns = [
    path('', home, name='home',),
    path('login/', UserApiView.as_view()),
    path('login/<int:pk>', UserApiView.as_view()),
]
