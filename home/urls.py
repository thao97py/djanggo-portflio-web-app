from django.contrib import admin
from django.urls import path, include
from home import views
#Django admin header customization
admin.site.site_header="Admin Site for Developers"
admin.site.site_title = " Welcome to Admin's Dashboard"
admin.site.index_title = "Welcome to this portal"
urlpatterns = [
    path('',views.home, name='home'),
    path('home',views.home, name='home'),
    path('about', views.about,name = 'about'),
    path('resume', views.resume,name = 'resume'),
    path('contact', views.contact,name = 'contact'),
    path('projects', views.projects,name = 'projects'),  
    path('projects/memory_game', views.memory_game,name = 'memory_game'),
    path('projects/pokemon_api_game', views.pokemon_api_game,name = 'pokemon_api_game'),
    path('projects/upcomingProject', views.upcomingProject,name = 'upcomingProject'),

]