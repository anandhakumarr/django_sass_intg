# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class ContentTemplates(models.Model):
    template_name  = models.CharField(max_length=50, null=False, blank=False)
    slug = models.SlugField(unique=True, max_length=255)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    author = models.TextField()
    
    def __unicode__(self):
        return self.template_name
