# Generated by Django 2.0.3 on 2018-07-14 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0009_account_authorized'),
    ]

    operations = [
        migrations.AddField(
            model_name='telegramaccount',
            name='phone_code_hash',
            field=models.CharField(blank=True, default='', max_length=2048),
        ),
    ]
