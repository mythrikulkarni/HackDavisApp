from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Categories, User

from api.user.serializers import CategoriesSerializer

from django.conf import settings
import json

@api_view(['GET', 'POST'])
def user_auth(request):
    if request.method == 'GET':
        #This is for get
        section = request.GET.get("section", None)
        if section == "category_fetch":
            q_categories = Categories.objects.all()
            return Response({"is_success": True, "data": CategoriesSerializer(q_categories, many=True).data})

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
                response = settings.PROPEL_AUTH.create_user(
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
            else:
                user_obj = User.objects.create(user_propel_id=response["user_id"])
                user_obj.save()
            return Response({"is_success": True, "message": "success", 
                "user_id": user_obj.id})
        elif step == 2:
            user_id = request.POST.get("user_id", None)
            user_id = int(user_id)

            cat_ids = request.POST.get("cat_ids", None)
            cat_ids = json.loads(cat_ids)

            try:
                user_obj = User.objects.get(id=user_id)
            except User.DoesNotExist:
                return Response({"is_success": False, "message": "Something went wrong."})
            settings.PROPEL_AUTH.update_user_metadata(
                user_id=user_obj.user_propel_id,
                metadata={
                    "categories": cat_ids
                }
            )
            return Response({"is_success": True, "message": "Success"})
        return Response({"is_success": False, "message": "Invalid Request"})

        



