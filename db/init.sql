-- Création de la base de données
CREATE DATABASE IF NOT EXISTS ProjetDB;

-- Utilisation de la base de données créée
USE ProjetDB;

-- Création de la table Projets
CREATE TABLE IF NOT EXISTS Projets (
    code_projet VARCHAR(255) PRIMARY KEY,
    description TEXT
);

-- Création de la table Employés
CREATE TABLE IF NOT EXISTS Employés (
    tel_num VARCHAR(255) PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    date_naissance DATE
);

-- Création de la table Demandes
CREATE TABLE IF NOT EXISTS Demandes (
    num_demande VARCHAR(255) PRIMARY KEY,
    ville VARCHAR(255)
);
