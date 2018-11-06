import json

from django.conf import settings
from django.shortcuts import render
from requests import post


def render_app(url):
    data = json.dumps({"url": url})
    res = post(
        settings.RENDER_URL,
        data=data,
        headers={"Content-Type": "application/json"}
    )

    return res.json()


def home(request):
    app = render_app(request.path)

    return render(request, 'base.html', {"app": app})


def about(request):
    app = render_app(request.path)

    return render(request, 'base.html', {"app": app})
