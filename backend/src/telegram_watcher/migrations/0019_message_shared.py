# Generated by Django 2.0.3 on 2018-10-15 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0018_feed_new_messages'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='shared',
            field=models.BooleanField(default=False),
        ),
    ]