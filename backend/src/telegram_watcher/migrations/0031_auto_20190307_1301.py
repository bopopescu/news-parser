# Generated by Django 2.0.3 on 2019-03-07 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0030_auto_20190307_1256'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='message',
            name='telegram_wa_date_d1338d_idx',
        ),
        migrations.AddIndex(
            model_name='message',
            index=models.Index(fields=['-date', 'id'], name='telegram_wa_date_ae4bd3_idx'),
        ),
    ]
