# Generated by Django 5.1 on 2024-08-19 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TNTNP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Solicitante', models.CharField(max_length=100)),
                ('Contato', models.CharField(max_length=50)),
                ('Relato', models.CharField(max_length=1000)),
                ('Procedimento', models.CharField(max_length=1000)),
                ('DNS', models.CharField(max_length=10)),
                ('Solucao', models.CharField(max_length=1000)),
                ('Sinal', models.CharField(max_length=20)),
                ('Alarmes', models.CharField(max_length=50)),
                ('Remoto', models.BooleanField()),
                ('Atendimento', models.CharField(max_length=50)),
                ('Endereco', models.CharField(max_length=200)),
                ('Cidade', models.CharField(max_length=50)),
                ('Periodo', models.CharField(max_length=100)),
            ],
        ),
    ]
