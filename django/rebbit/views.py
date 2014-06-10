from django.http import HttpResponse

from rest_framework.viewsets import ModelViewSet
from rest_framework import filters

from .models import Link


def homepage(request):
    return HttpResponse('<h1>Hello World!</h1>')


class LinkViewSet(ModelViewSet):
    model = Link
    filter_backends = (filters.DjangoFilterBackend, filters.OrderingFilter,)
    ordering_fields = ('title',)
    filter_fields = ('title', 'nsfw')