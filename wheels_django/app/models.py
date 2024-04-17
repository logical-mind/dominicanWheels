from django.db import models


class Diametro (models.Model):
    diametro = models.IntegerField()
    def __str__(self):
        return str(self.diametro)


class Diseno (models.Model):
    nombre = models.CharField(max_length=200)
    def __str__(self):
        return str(self.nombre)
    

class Marca (models.Model):
    nombre = models.CharField(max_length=200)
    def __str__(self):
        return str(self.nombre)    
    

class Categoria (models.Model):
    nombre = models.CharField(max_length=200)
    def __str__(self):
        return str(self.nombre)    


class Velocidad (models.Model):
    nombre = models.CharField(max_length=200)
    def __str__(self):
        return str(self.nombre) 
    
    
class Size (models.Model):
    nombre = models.CharField(max_length=200)
    def __str__(self):
        return str(self.nombre)     


class Goma (models.Model):
    imageUrl = models.CharField(max_length=5000,null=True, default=None)
    diametro = models.ForeignKey(Diametro,on_delete=models.CASCADE)
    tamano = models.CharField(max_length=200, unique=True)
    size = models.ForeignKey(Size,on_delete=models.CASCADE)
    peso= models.CharField(max_length=200,null=True)
    diseno = models.ForeignKey(Diseno,on_delete=models.CASCADE,null=True)
    marca = models.ForeignKey(Marca,on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, null=True)
    precio = models.FloatField(null=True, default=None)
    tipo = models.CharField(max_length=200, default="")
       