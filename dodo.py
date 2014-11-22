def task_compile_less():
    """Make a build of the frontend"""
    return {
        'actions': ['lessc less/main.less %(targets)s',],
        'targets': ['static/css/build.css',],
    }
