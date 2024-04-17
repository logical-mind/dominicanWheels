from rest_framework import serializers
from app.models import Diametro, Diseno, Marca, Categoria, Velocidad, Size, Goma


class DiametroSerializer(serializers.ModelSerializer):
     class Meta:
         model = Diametro
         fields = '__all__'


class DisenoSerializer(serializers.ModelSerializer):
     class Meta:
         model = Diseno
         fields = '__all__'


class MarcaSerializer(serializers.ModelSerializer):
     class Meta:
         model = Marca
         fields = '__all__'  


class CategoriaSerializer(serializers.ModelSerializer):
     class Meta:
         model = Categoria
         fields = '__all__'  


class VelocidadSerializer(serializers.ModelSerializer):
     class Meta:
         model = Velocidad
         fields = '__all__' 
        

class SizeSerializer(serializers.ModelSerializer):
     class Meta:
         model = Size
         fields = '__all__'


class GomaSerializer(serializers.ModelSerializer):
    diametro = serializers.PrimaryKeyRelatedField(queryset=Diametro.objects.all())
    size = serializers.PrimaryKeyRelatedField(queryset=Size.objects.all())
    diseno = serializers.PrimaryKeyRelatedField(allow_null=True, required=False, queryset=Diseno.objects.all())
    marca = serializers.PrimaryKeyRelatedField(queryset=Marca.objects.all())
    categoria = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all())

    class Meta:
        model = Goma
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['diametro'] = instance.diametro.diametro
        representation['size'] = instance.size.nombre
        if instance.diseno:
            representation['diseno'] = instance.diseno.nombre
        representation['marca'] = instance.marca.nombre
        representation['categoria'] = instance.categoria.nombre
        return representation                                   