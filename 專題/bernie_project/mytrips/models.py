from django.db import models
class Iccard(models.Model):
    name = models.CharField(max_length=45)
    id_card = models.CharField(max_length=45)
    cardnum = models.CharField(max_length=45)
    birthday = models.CharField(max_length=45)
    sex = models.CharField(max_length=45)
    carddate = models.CharField(max_length=45)
    temperature = models.FloatField()
    weight = models.FloatField()
    pressures = models.IntegerField(db_column='pressureS')  # Field name made lowercase.
    pressured = models.IntegerField(db_column='pressureD')  # Field name made lowercase.
    testdate = models.DateTimeField()
    heartbeat = models.IntegerField()
    objects=models.Manager()
    class Meta:
        managed = False
        db_table = 'iccard'

# Create your models here.
