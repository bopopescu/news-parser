# Generated by Django 2.0.3 on 2018-07-14 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0012_auto_20180714_1722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='source',
            name='external_id',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
