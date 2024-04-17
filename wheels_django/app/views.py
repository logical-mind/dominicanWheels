from django.shortcuts import render
from rest_framework import generics, status
from app.models import Goma,  Diseno, Diametro, Marca, Categoria, Velocidad, Size
from .serializers import DiametroSerializer, DisenoSerializer, MarcaSerializer, CategoriaSerializer, VelocidadSerializer, SizeSerializer, GomaSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404



@api_view(['PUT','GET', 'POST', 'DELETE'])
def gomaOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Goma.objects.get(pk)
                        serializer = GomaSerializer(objeto)
                        return JsonResponse(serializer.data)
                    except Goma.DoesNotExist:
                        return JsonResponse({'message': 'El tutorial no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Goma.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Goma.objects.all()
                      

                    serializer = GomaSerializer(objeto, many=True)
                    
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = GomaSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Goma.objects.get(pk=pk)
                    serializer = GomaSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Goma.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Goma, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                

@api_view(['PUT','GET', 'POST', 'DELETE'])
def disenoOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Diseno.objects.get(pk)
                        serializer = DisenoSerializer(objeto)
                        return JsonResponse(serializer.data)   
                    except Diseno.DoesNotExist:
                        return JsonResponse({'message': 'El diseno no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Diseno.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Diseno.objects.all()

                    serializer = DisenoSerializer(objeto, many=True)
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = DisenoSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Diseno.objects.get(pk=pk)
                    serializer = DisenoSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Diseno.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Diseno, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
     

@api_view(['PUT','GET', 'POST', 'DELETE'])
def diametroOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Diametro.objects.get(pk)
                        serializer = DiametroSerializer(objeto)
                        return JsonResponse(serializer.data)
                    except Diametro.DoesNotExist:
                        return JsonResponse({'message': 'El tutorial no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Diametro.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Diametro.objects.all().order_by('diametro')

                    serializer = DiametroSerializer(objeto, many=True)
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = DiametroSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Diametro.objects.get(pk=pk)
                    serializer = DiametroSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Diametro.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Diametro, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  

@api_view(['PUT','GET', 'POST', 'DELETE'])
def marcaOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Marca.objects.get(pk)
                        serializer = MarcaSerializer(objeto)
                        return JsonResponse(serializer.data)
                    except Marca.DoesNotExist:
                        return JsonResponse({'message': 'El tutorial no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Marca.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Marca.objects.all()

                    serializer = MarcaSerializer(objeto, many=True)
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = MarcaSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Marca.objects.get(pk=pk)
                    serializer = MarcaSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Marca.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Marca, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  

@api_view(['PUT','GET', 'POST', 'DELETE'])
def categoriaOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Categoria.objects.get(pk)
                        serializer = CategoriaSerializer(objeto)
                        return JsonResponse(serializer.data)
                    except Categoria.DoesNotExist:
                        return JsonResponse({'message': 'El tutorial no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Categoria.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Categoria.objects.all()

                    serializer = CategoriaSerializer(objeto, many=True)
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = CategoriaSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Categoria.objects.get(pk=pk)
                    serializer = CategoriaSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Categoria.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Categoria, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['PUT','GET', 'POST', 'DELETE'])
def velocidadOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Velocidad.objects.get(pk)
                        serializer = VelocidadSerializer(objeto)
                        return JsonResponse(serializer.data)
                    except Velocidad.DoesNotExist:
                        return JsonResponse({'message': 'El tutorial no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Velocidad.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Velocidad.objects.all().order_by('-id')
                        

                    serializer = VelocidadSerializer(objeto, many=True)
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = VelocidadSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Velocidad.objects.get(pk=pk)
                    serializer = VelocidadSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Velocidad.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Velocidad, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT','GET', 'POST', 'DELETE'])
def sizeOpciones(request, pk=None, filtro=None, valor=None):

    if request.method == 'GET':
                if pk is not None:
                    try:
                        objeto = Size.objects.get(pk)
                        serializer = SizeSerializer(objeto)
                        return JsonResponse(serializer.data)
                    except Size.DoesNotExist:
                        return JsonResponse({'message': 'El tutorial no existe'}, status=status.HTTP_404_NOT_FOUND)
                else:
                    if filtro is not None and valor is not None:
                        kwargs = {filtro: valor}
                        objeto = Size.objects.filter(**kwargs)  
                        
                    else:     
                        objeto = Size.objects.all()

                    serializer = SizeSerializer(objeto, many=True)
                    return JsonResponse(serializer.data, safe=False)
            
    elif request.method == 'POST':
                serializer = SizeSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
                try:
                    objeto = Size.objects.get(pk=pk)
                    serializer = SizeSerializer(objeto, data=request.data)
                    
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Size.DoesNotExist:
                    return JsonResponse({'message': 'La objeto no existe'}, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
                try:
                    objeto = get_object_or_404(Size, pk=pk)
                    objeto.delete()
                    return JsonResponse({'message': 'objeto eliminada correctamente'}, status=status.HTTP_204_NO_CONTENT)
                except Exception as e:
                    return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        