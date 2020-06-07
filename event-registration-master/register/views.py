from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import Registration
from .serializers import RegistrationSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
import numpy as np


class registration(ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer


class registration2(APIView):

    def get(self, req, *args, **kwargs):
        all_registrations = Registration.objects.all()
        serializer = RegistrationSerializer(all_registrations, many=True)
        print(serializer.data)
        '''
        [OrderedDict([('id', 5), ('mobile', '+917978496264'), ('id_card', '/media/id_card/artsyy_MxmOBgd.jpeg'), 
        ('reg_type', 'something'), ('num_of_tickets', 7), ('reg_date', '2020-05-30T21:17:35.997859Z')]), 
        OrderedDict([('id', 7), ('mobile', '+919861281236'), ('id_card', '/media/id_card/download17.png'), 
        ('reg_type', 'Self'), ('num_of_tickets', 7), ('reg_date', '2020-05-30T16:25:40.814359Z')])]
[30/May/2020 21:35:21] "GET /reg_2 HTTP/1.1" 200 319

        '''
        return Response(serializer.data)

    def post(self, req, *args, **kwargs):
        # print(req.data)
        serilizer = RegistrationSerializer(data=req.data)
        if serilizer.is_valid():
            serilizer.save()
            if serilizer.data['id'] is None:
                return Response({
                    "msg": "Please make sure your image is in png or jpeg format and Registration Type should be "
                           "of 4 types i.e. Self, Group, Corporate, Others."
                }, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(serilizer.data, status=status.HTTP_201_CREATED)
        return Response(serilizer.errors, status=status.HTTP_400_BAD_REQUEST)


class logout(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, req, *args, **kwargs):
        # admin = User.objects.all().first()
        admin = User.objects.all().filter(username=req.user).first()
        admin.auth_token.delete()

        return Response({
            'msg': 'Token deleted'
        }, status=status.HTTP_200_OK)


class count_reg_types(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, req, *args, **kwargs):
        all_registrations = Registration.objects.all()
        serializer = RegistrationSerializer(all_registrations, many=True)
        all_registrations_list = serializer.data
        reg_type_list = []
        reg_type_dict = {}
        for each_ordered_dict in all_registrations_list:
            reg_type_list.append(each_ordered_dict['reg_type'])
        unique_elements, counts_elements = np.unique(np.array(reg_type_list), return_counts=True)
        for i in range(len(unique_elements)):
            print(unique_elements[i], counts_elements[i])
            reg_type_dict.setdefault(unique_elements[i], counts_elements[i])
        return Response(reg_type_dict, status=status.HTTP_200_OK)
