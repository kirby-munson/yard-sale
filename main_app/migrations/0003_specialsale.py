# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-27 16:04
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main_app', '0002_auto_20160726_1945'),
    ]

    operations = [
        migrations.CreateModel(
            name='SpecialSale',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=40)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='listing_photos', verbose_name='Upload a photo')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('paid_status', models.BooleanField(default=False)),
                ('special_sale_name', models.CharField(max_length=40)),
                ('special_sale_category', models.CharField(choices=[('Extra fun', 'Extra fun'), ('Personal need', 'Personal need'), ('Big trip', 'Big trip'), ('Help others', 'Help others'), ('Other', 'Other')], max_length=40)),
                ('special_sale_description', models.TextField()),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='main_app.Category')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
    ]
