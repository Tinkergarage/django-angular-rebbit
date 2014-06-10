appdays2014
===========

Workshop "Fullstack developers with Django and AngularJS", Appdays @Pordenone 26/04/2014

[Link to the slides](https://docs.google.com/presentation/d/1GZX2vFxMe_T-wYoztjKcTHr9trr8XedV4uDVZbVZHHA/edit?usp=sharing)

Backend
-------

The following have to be installed on your system before starting:

 * python 2.7
 * virtualenvwrapper

Clone this git repository and enter the directory:

    git clone https://github.com/Tinkergarage/appdays2014.git
    cd appdays2014

At the command line, create a Python virtual environment:

    mkvirtualenv appdays

Then install required libraries and packages:

    pip install -r requirements.txt

Create the database:

    python manage.py syncdb

Test everything is ok by running the local HTTP server:

    python manage.py runserver

Visit the relevant parts of the project:

 * http://localhost:8000/
 * http://localhost:8000/admin
 * http://localhost:8000/api
