# Generated by Django 2.0.3 on 2018-10-05 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0017_auto_20180827_0458'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='new_messages',
            field=models.IntegerField(default=0),
        ),
    ]