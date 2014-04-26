from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from rest_framework.routers import DefaultRouter

from rebbit.views import LinkViewSet

router = DefaultRouter(trailing_slash=False)
router.register('links', LinkViewSet)


urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'rebbit.views.homepage', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/', include(router.urls))
)
