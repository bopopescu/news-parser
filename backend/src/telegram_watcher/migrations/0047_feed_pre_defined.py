# Generated by Django 2.0.3 on 2019-05-27 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0046_feed_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='pre_defined',
            field=models.BooleanField(default=False),
        ),
    ]
