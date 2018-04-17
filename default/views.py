# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from default.models import ContentTemplates
# Create your views here.

def index(request):
	template_data = ContentTemplates.objects.get(template_name='index')
	return render(request, 'index.html', {'template_data':template_data})

def aboutus(request):
	template_data = ContentTemplates.objects.get(template_name='aboutus')
	return render(request, 'aboutus.html', {'template_data':template_data})