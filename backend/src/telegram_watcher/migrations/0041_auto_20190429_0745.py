# Generated by Django 2.0.3 on 2019-04-29 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0040_auto_20190429_0718'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='message',
            index=models.Index(fields=['-date', 'id'], name='telegram_wa_date_ae4bd3_idx'),
        ),
        migrations.AddIndex(
            model_name='message',
            index=models.Index(fields=['source'], name='telegram_wa_source__add81e_idx'),
        ),
    ]
