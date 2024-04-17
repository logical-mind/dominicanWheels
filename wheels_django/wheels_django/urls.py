from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('gomaOpciones',views.gomaOpciones, name="gomaOpciones"),
    path('gomaOpciones/<int:pk>',views.gomaOpciones, name="gomaOpciones"),
    path('gomaOpciones/<str:filtro>/<str:valor>',views.gomaOpciones , name="gomaOpciones"),

    path('categoriaOpciones',views.categoriaOpciones, name="categoriaOpciones"),
    path('categoriaOpciones/<int:pk>',views.categoriaOpciones, name="categoriaOpciones"),
    path('categoriaOpciones/<str:filtro>/<str:valor>',views.categoriaOpciones , name="categoriaOpciones"),

    path('diametroOpciones',views.diametroOpciones, name="diametroOpciones"),
    path('diametroOpciones/<int:pk>',views.diametroOpciones, name="diametroOpciones"),
    path('diametroOpciones/<str:filtro>/<str:valor>',views.diametroOpciones , name="diametroOpciones"),

    path('marcaOpciones',views.marcaOpciones, name="marcaOpciones"),
    path('marcaOpciones/<int:pk>',views.marcaOpciones, name="marcaOpciones"),
    path('marcaOpciones/<str:filtro>/<str:valor>',views.marcaOpciones , name="marcaOpciones"),

    path('categoriaOpciones',views.categoriaOpciones, name="categoriaOpciones"),
    path('categoriaOpciones/<int:pk>',views.categoriaOpciones, name="categoriaOpciones"),
    path('categoriaOpciones/<str:filtro>/<str:valor>',views.categoriaOpciones , name="categoriaOpciones"),

    path('velocidadOpciones',views.velocidadOpciones, name="velocidadOpciones"),
    path('velocidadOpciones/<int:pk>',views.velocidadOpciones, name="velocidadOpciones"),
    path('velocidadOpciones/<str:filtro>/<str:valor>',views.velocidadOpciones , name="velocidadOpciones"),

    path('sizeOpciones',views.sizeOpciones, name="sizeOpciones"),
    path('sizeOpciones/<int:pk>',views.sizeOpciones, name="sizeOpciones"),
    path('sizeOpciones/<str:filtro>/<str:valor>',views.sizeOpciones , name="sizeOpciones"),

    path('disenoOpciones',views.disenoOpciones, name="disenoOpciones"),
    path('disenoOpciones/<int:pk>',views.disenoOpciones, name="disenoOpciones"),
    path('disenoOpciones/<str:filtro>/<str:valor>',views.disenoOpciones , name="disenoOpciones"),


]
