# Generated by Django 2.0.3 on 2019-04-28 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0033_auto_20190428_1455'),
    ]

    operations = [
        migrations.AddIndex(
            model_name='message',
            index=models.Index(fields=['-date', '-id'], name='telegram_wa_date_76bad1_idx'),
        ),
        migrations.AddIndex(
            model_name='message',
            index=models.Index(fields=['-date'], name='telegram_wa_date_d1338d_idx'),
        ),
    ]
