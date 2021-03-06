# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-26 19:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShoppingCart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.AddField(
            model_name='listing',
            name='paid_status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='category',
            name='category',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='listing',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='main_app.Category'),
        ),
        migrations.AlterField(
            model_name='listing',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='listing_photos', verbose_name='Upload a photo'),
        ),
        migrations.AddField(
            model_name='shoppingcart',
            name='item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main_app.Listing'),
        ),
    ]
