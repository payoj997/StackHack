from rest_framework import serializers
from .models import Registration
import os


def check_image_format(image):
    file_name, ext = os.path.splitext(str(image))
    accepted_ext = {'.png': True, '.jpeg': True}

    if accepted_ext.get(ext, False):
        return True
    else:
        raise serializers.ValidationError("Image format should be in png or jpeg format.")


def check_image_size(image):
    if image.size < 4 * 1024 * 1024:
        return image
    else:
        raise serializers.ValidationError("Image size should be < 4 mb")


def check_reg_type(reg_type):
    accepted_reg_type = {'self': True, 'group': True, 'corporate': True, 'others': True}
    reg_type_lower_case = reg_type.lower()
    if accepted_reg_type.get(reg_type_lower_case, False):
        reg_type = reg_type_lower_case
        return reg_type
    else:
        raise serializers.ValidationError("Registration Type should be of 4 types i.e. Self, Group"
                                          ", Corporate, Others.")


class RegistrationSerializer(serializers.ModelSerializer):
    id_card = serializers.ImageField(validators=[check_image_format, check_image_size])
    reg_type = serializers.CharField(validators=[check_reg_type])

    class Meta:
        model = Registration
        fields = '__all__'
