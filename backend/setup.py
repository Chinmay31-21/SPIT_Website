"""
Quick setup script for SPIT Admin Backend
This script helps with initial setup and configuration
"""

import os
import sys
import secrets
import subprocess


def generate_secret_key():
    """Generate a secure secret key"""
    return secrets.token_urlsafe(50)


def create_env_file():
    """Create .env file from template"""
    if os.path.exists('.env'):
        response = input('.env file already exists. Overwrite? (y/n): ')
        if response.lower() != 'y':
            print('Skipping .env creation...')
            return
    
    secret_key = generate_secret_key()
    
    env_content = f"""# Django Settings
SECRET_KEY={secret_key}
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173

# Database Settings (PostgreSQL - optional)
# DB_NAME=spit_db
# DB_USER=postgres
# DB_PASSWORD=your_password
# DB_HOST=localhost
# DB_PORT=5432
"""
    
    with open('.env', 'w') as f:
        f.write(env_content)
    
    print('✓ .env file created with secure SECRET_KEY')


def create_directories():
    """Create necessary directories"""
    dirs = ['static', 'media', 'media/announcements', 'media/events', 
            'media/gallery', 'media/news', 'media/documents']
    
    for directory in dirs:
        os.makedirs(directory, exist_ok=True)
    
    print('✓ Required directories created')


def run_migrations():
    """Run Django migrations"""
    print('\nRunning migrations...')
    subprocess.run([sys.executable, 'manage.py', 'makemigrations'])
    subprocess.run([sys.executable, 'manage.py', 'migrate'])
    print('✓ Migrations completed')


def collect_static():
    """Collect static files"""
    print('\nCollecting static files...')
    subprocess.run([sys.executable, 'manage.py', 'collectstatic', '--noinput'])
    print('✓ Static files collected')


def create_superuser():
    """Prompt to create superuser"""
    print('\n' + '='*50)
    print('Create Admin Superuser')
    print('='*50)
    response = input('\nWould you like to create a superuser now? (y/n): ')
    
    if response.lower() == 'y':
        subprocess.run([sys.executable, 'manage.py', 'createsuperuser'])
    else:
        print('\nYou can create a superuser later with:')
        print('python manage.py createsuperuser')


def main():
    """Main setup function"""
    print('='*50)
    print('SPIT College Admin Backend Setup')
    print('='*50)
    print()
    
    # Check if we're in the backend directory
    if not os.path.exists('manage.py'):
        print('Error: Please run this script from the backend directory')
        sys.exit(1)
    
    try:
        # Step 1: Create .env file
        print('[1/5] Setting up environment...')
        create_env_file()
        
        # Step 2: Create directories
        print('\n[2/5] Creating directories...')
        create_directories()
        
        # Step 3: Run migrations
        print('\n[3/5] Setting up database...')
        run_migrations()
        
        # Step 4: Collect static files
        print('\n[4/5] Collecting static files...')
        collect_static()
        
        # Step 5: Create superuser
        print('\n[5/5] Admin user setup...')
        create_superuser()
        
        # Success message
        print('\n' + '='*50)
        print('Setup completed successfully! 🎉')
        print('='*50)
        print('\nNext steps:')
        print('1. Activate your virtual environment (if not already active)')
        print('2. Run: python manage.py runserver')
        print('3. Visit: http://localhost:8000/admin/')
        print('\nAPI Documentation: http://localhost:8000/api/')
        print('='*50)
        
    except Exception as e:
        print(f'\nError during setup: {e}')
        sys.exit(1)


if __name__ == '__main__':
    main()
