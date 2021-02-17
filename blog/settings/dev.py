from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'feajh9^qsn@#_7cn5jgg1h&8e$f@kx+g@-w#dse#egudj!tjdp'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['192.168.1.45', '10.206.56.220'] 

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


try:
    from .local import *
except ImportError:
    pass
