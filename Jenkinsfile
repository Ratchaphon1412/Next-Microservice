
pipeline {
    agent any
    
    environment {
        SSH_HOST = 'minny.ratchaphon1412.co'
        SSH_PORT = '22'
        SSH_USER = 'root'
    }
    
    stages {
        stage('SSH to Target Server') {
            steps {
                script {
                  
                    sh """
                        ssh ${SSH_USER}@${SSH_HOST} -y <<EOF
                        cd ~/Next-Microservice
                        docker compose down
                        git pull
                        docker compose up -d --build
                        docker system prune -f
EOF
                    """
                    
                }
            }
        },
    }
}
