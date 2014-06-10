================================
Django-AngularJS ultimate weapon
================================

Workshop "Survival course for modern developers: go full-stack with Django and AngularJS"

Here you can find some `slides`_

.. _slides: https://docs.google.com/presentation/d/1GZX2vFxMe_T-wYoztjKcTHr9trr8XedV4uDVZbVZHHA/edit?usp=sharing

Backend
-------

The following have to be installed on your system before starting:

* python 2.7
* virtualenvwrapper

Clone this git repository and enter the directory:

.. code-block:: bash

    $ git clone https://github.com/Tinkergarage/django-angular-rebbit.git
    $ cd django-angular-rebbit

At the command line, create a Python virtual environment:

.. code-block:: bash

    $ mkvirtualenv django-angular-rebbit

Then install required libraries and packages:

.. code-block:: bash

    $ pip install -r requirements.txt

Create the database:

.. code-block:: bash

    $ python django/manage.py syncdb

Test everything is ok by running the local HTTP server:

.. code-block:: bash

    $ python django/manage.py runserver

You can visit the relevant parts of the project from the following urls:

* http://localhost:8000/ (a simple homepage)
* http://localhost:8000/admin (admin to manage models)
* http://localhost:8000/api (api root endpoint)

Frontend
--------

The following have to be installed on your system before starting:

* node 0.10.x (via `NVM`_)
* grunt-cli
* bower
* yo (Yeoman)

.. _NVM: https://github.com/creationix/nvm

While your runserver is up and running, enter to directory:

 .. code-block:: bash

    $ cd angular

Install all dependencies for build system and project:

.. code-block:: bash

    $ npm install && bower install

Just run grunt to serve angular single page application:

.. code-block:: bash

    $ grunt serve
