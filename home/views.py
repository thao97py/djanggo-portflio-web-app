from django.shortcuts import render, HttpResponse
from home.models import Contact
from django.http import JsonResponse
# Create your views here.
def home(request):
    # return HttpResponse("this is my home page (/) ")
    # context is just a python dictionary
    context = {'name': 'Thao', 'course': 'Django'}
    return render(request, 'home2.html', context)

def about(request):
    # return HttpResponse("this is my About page (/about) ")
    return render(request, 'about2.html')
    
def resume(request):
    # return HttpResponse("this is my About page (/about) ")
    return render(request, 'resume.html')

def contact(request):
    popupMess=""
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        desc = request.POST['desc']
        contactInstance = Contact(name=name, email=email, phone=phone,desc=desc)  #ins stands for instance, method to write into database
        contactInstance.save()  #save values into database
        print("----------------The data has been written into the database")
        popupMess ="Thank for visiting!"
    return render(request, 'contact.html',{"data":popupMess})

# ajax_posting function

def projects(request):
    # return HttpResponse("this is my Projects page (/projects) ")
    return render(request, 'projects.html')

def memory_game(request):
    # return HttpResponse("this is my Projects page (/projects) ")
    return render(request, 'proj_templates/memory_game.html')

def test(request):
    # return HttpResponse("this is my About page (/about) ")
    return render(request, 'test.html')

def pokemon_api_game(request):
    # return HttpResponse("this is my Projects page (/projects) ")
    return render(request, 'proj_templates/What_that_poke.html')
    
def upcomingProject(request):
    # return HttpResponse("this is my Projects page (/projects) ")
    return render(request, 'proj_templates/upcomingProject.html')   
    