# Generated by Django 2.0.3 on 2019-01-20 00:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('telegram_watcher', '0020_auto_20181125_0452'),
    ]

    operations = [
        migrations.CreateModel(
            name='MessageFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='')),
                ('message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='telegram_watcher.Message')),
            ],
        ),
    ]
