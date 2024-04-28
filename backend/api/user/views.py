from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.conf import settings

@api_view(['GET', 'POST'])
def user_auth(request):
    if request.method == 'GET':
        #This is for get
        return Response({"message": "User data will be returned"})
    elif request.method == 'POST':
        #This is for post
        pass