Members Map

First:
    sudo apt-get install sqlite3
    run in sqlite3 CLI the following "sqlite> CREATE VIRTUAL TABLE testrtree USING rtree(id,minX,maxX,minY,maxY);"
    if you get an error you should referr to : _https://docs.djangoproject.com/en/dev/ref/contrib/gis/install/spatialite/#create-spatialite-db


    then you should run :
    $ sudo apt-get install libspatialite-dev
    $sudo apt-get install spatialite-bin
    spatialite geodjango.db "SELECT InitSpatialMetaData();"

    



