from django.http import HttpResponse

from rest_framework.viewsets import ModelViewSet

from .models import Link


def homepage(request):
    return HttpResponse("<h1>Hello, World!</h1>")


class LinkViewSet(ModelViewSet):
    model = Link