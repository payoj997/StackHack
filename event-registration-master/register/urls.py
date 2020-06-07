from rest_framework import routers
from . import views
from django.urls import path, include


router = routers.DefaultRouter()
router.register('', views.registration, 'registration')

urlpatterns = [
    path('', include(router.urls)),
    path('reg_2', views.registration2.as_view(), name='registration2')
]