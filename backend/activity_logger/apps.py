from django.apps import AppConfig


class ActivityLoggerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'activity_logger'
    verbose_name = 'Activity Logger'
    
    def ready(self):
        import activity_logger.signals
