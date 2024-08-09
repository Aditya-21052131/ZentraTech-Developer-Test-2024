from django.urls import path
from .views import MessageList, MessageDetail

urlpatterns = [
    path('', MessageList.as_view(), name='message-list'),
    path('<int:pk>/', MessageDetail.as_view(), name='message-detail'),
]
