from django.db import models


class Link(models.Model):
    title = models.CharField(max_length=250)
    url = models.URLField()
    upvotes = models.IntegerField()
    downvotes = models.IntegerField()
    nsfw = models.BooleanField()

    def __str__(self):
        return self.title
