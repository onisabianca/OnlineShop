# Generated by Django 4.1.7 on 2023-04-23 14:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('RealEstateApp', '0007_alter_visit_date'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='visit',
            unique_together={('PropertyId', 'Date', 'Hour')},
        ),
    ]