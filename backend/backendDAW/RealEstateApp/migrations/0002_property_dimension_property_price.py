# Generated by Django 4.1.7 on 2023-04-02 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RealEstateApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='Dimension',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='property',
            name='Price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=8),
        ),
    ]
