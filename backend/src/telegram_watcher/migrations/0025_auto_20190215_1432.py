# Generated by Django 2.0.3 on 2019-02-15 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0024_auto_20190215_1428'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='messagefile',
            index=models.Index(fields=['message'], name='telegram_wa_message_c5a656_idx'),
        ),
    ]