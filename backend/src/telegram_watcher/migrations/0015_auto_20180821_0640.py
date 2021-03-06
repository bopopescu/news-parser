# Generated by Django 2.0.3 on 2018-08-21 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0014_source_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_subscriber',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='stripe_token',
            field=models.CharField(blank=True, max_length=4096, null=True),
        ),
    ]
