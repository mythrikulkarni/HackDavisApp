from django.core.management.base import BaseCommand, CommandError
from api.models import Categories

class Command(BaseCommand):
    help = "Creates all the default data"

    def handle(self, *args, **options):
        categories = [
            "Technology",
            "Science",
            "Health and Fitness",
            "Travel",
            "Food and Cooking",
            "Fashion and Style",
            "Sports",
            "Business and Entrepreneurship",
            "Art and Design",
            "Literature and Writing",
            "History",
            "Philosophy",
            "Psychology",
            "Education",
            "Music",
            "Movies and TV Shows",
            "Gaming",
            "Photography",
            "Politics and Current Events",
            "Environment and Sustainability",
            "Parenting",
            "Relationships and Dating",
            "Personal Finance",
            "Self-Improvement",
            "Spirituality and Religion",
            "Gardening",
            "Pets and Animals",
            "DIY and Crafts",
            "Cars and Automobiles",
            "Fitness and Exercise",
            "Yoga and Meditation",
            "Cooking and Baking",
            "Nutrition and Dieting",
            "Home Decor",
            "Technology Trends",
            "Space and Astronomy",
            "Cryptocurrency and Blockchain",
            "Social Media and Influencers",
            "Sustainable Living",
            "Career Development",
            "Mental Health",
            "Fashion Trends",
            "Travel Destinations",
            "Adventure and Exploration",
            "Wildlife and Conservation",
            "Parenting Tips and Advice",
            "Marriage and Relationships",
            "Budget Travel Tips",
            "Healthy Eating Habits",
            "Personal Development and Growth"
        ]
        for category in categories:
            try:
                Categories.objects.get(cat_name=category)
            except Categories.DoesNotExist:
                cat_obj = Categories.objects.create(cat_name=category)
                cat_obj.save()
            else:
                print(f"Category {category} is already created.")