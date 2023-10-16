from django.db import models

# Create your models here.

class User(models.Model):
    UserId=models.AutoField(primary_key=True)
    Email=models.CharField(max_length=100)
    Password=models.CharField(max_length=100)
    Role=models.CharField(max_length=50, default='client')
    Name=models.CharField(max_length=100)
    Telephone = models.CharField(max_length=15)
    Address=models.CharField(max_length=100)
    Interest=models.CharField(max_length=200)

class Property(models.Model):
    PropertyId=models.AutoField(primary_key=True)
    Type=models.CharField(max_length=100)
    Price=models.DecimalField(max_digits=8, decimal_places=2,default=0)
    Location=models.CharField(max_length=100)
    Dimension=models.IntegerField(default=0)
    Operation=models.CharField(max_length=50)
    Details=models.TextField(max_length=500)
    Image=models.CharField(max_length=200)

class Visit(models.Model):
    VisitId=models.AutoField(primary_key=True)
    PropertyId=models.ForeignKey(Property, on_delete=models.CASCADE)
    UserId=models.ForeignKey(User,on_delete=models.CASCADE)
    Date=models.DateField(default="2000-01-01")
    Hour=models.TimeField(default="00:00:00")
    class Meta:
        unique_together = ('PropertyId', 'Date', 'Hour')