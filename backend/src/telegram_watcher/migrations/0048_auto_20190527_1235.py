# Generated by Django 2.0.3 on 2019-05-27 12:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0047_feed_pre_defined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='feeds', to=settings.AUTH_USER_MODEL),
        ),
    ]
