from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.conf import settings
import json

@api_view(['GET', 'POST'])
def user_auth(request):
    if request.method == 'GET':
        #This is for get
        return Response({"message": "User data will be returned"})
    elif request.method == 'POST':
        #This is for post
        step = request.POST.get("step", None)
        step = int(step)

        if step == 1:
            first_name = request.POST.get("first_name", None)
            last_name = request.POST.get("last_name", None)
            email = request.POST.get("email", None)
            password = request.POST.get("password", None)

            username = email.split("@")[0]

            try:
                settings.PROPEL_AUTH.create_user(
                first_name = first_name,
                last_name = last_name,
                email = email,
                email_confirmed = False,
                send_email_to_confirm_email_address = False,
                
                password = password,
                ask_user_to_update_password_on_login = False,
                
                username = username,
            )
            except Exception as e:
                print(e)
                return Response({"is_success": False, "message": "Something went wrong."})


            return Response({"is_success": True, "message": "success"})

        return Response({"is_success": False, "message": "Invalid Request"})

        



