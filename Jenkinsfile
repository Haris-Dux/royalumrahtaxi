pipeline {
    agent any
    
    tools {
        nodejs 'Node_JS'   
    }
    
    environment {
        DOCKER_BUILDKIT = '1'
        APP_NAME = 'react-frontend'
        DOCKER_IMAGE = "${APP_NAME}:${BUILD_NUMBER}"
        PORT = '80'
        HUB_REPOSITORY = 'react-frontend'
        HUB_USERNAME = 'harisdux'
    }
    
    stages {
        stage('Verify Prerequisites') {
            steps {
                script {
                    // Check Docker installation and permissions
                    sh '''                     
                        
                        # Ensure Docker daemon is running
                        if ! docker info >/dev/null 2>&1; then
                            echo "Docker daemon is not running. Please start Docker service."
                            exit 1
                        fi
                        
                        # Display versions for logging
                        echo "Docker version:"
                        docker --version
                        
                        echo "Node version:"
                        node --version
                        
                        echo "NPM version:"
                        npm --version
                    '''
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                        npm cache clean --force
                        npm install --legacy-peer-deps --force
                    '''
                }
            }
        }
        
        stage('Build React App') {
            steps {
                script {
                    sh '''
                        export CI=false
                        npm run build
                    '''
                }
            }
        }
        
       stage('Docker Build & Deploy') {
          steps {
        script {
            // Authenticate with Docker Hub
            withCredentials([string(credentialsId: 'DOCKERHUB_TOKEN', variable: 'DOCKERHUB_PAT')]) {
                sh """
                    echo "Logging into Docker Hub"
                    echo '${DOCKERHUB_PAT}' | docker login -u ${HUB_USERNAME} --password-stdin

                    # Build and tag image in one step 
                    docker build -t ${HUB_USERNAME}/${APP_NAME}:${BUILD_NUMBER} .

                    # Push the image
                    docker push ${HUB_USERNAME}/${APP_NAME}:${BUILD_NUMBER}
                    echo "Image Pushed successfully to Docker Hub"
                """
            }

        }
    }
}

stage('Deploy to VPS') {
    steps {
        script {
            withCredentials([
                usernamePassword(credentialsId: 'VPS_CREDENTIALS', usernameVariable: 'VPS_USER', passwordVariable: 'VPS_PASS'),
                string(credentialsId: 'DOCKERHUB_TOKEN', variable: 'DOCKERHUB_PAT')
            ]) {
                sh """
                    sshpass -p "${VPS_PASS}" ssh -o StrictHostKeyChecking=no ${VPS_USER}@31.220.109.115 <<EOF
                        echo "Logging into Docker Hub"
                        echo '${DOCKERHUB_PAT}' | docker login -u ${HUB_USERNAME} --password-stdin

                        echo "Pulling latest Docker image"
                        docker pull ${HUB_USERNAME}/${APP_NAME}:${BUILD_NUMBER}

                        echo "Stopping old container (if running)"
                        docker stop ${APP_NAME} || true
                        docker rm ${APP_NAME} || true

                        echo "Starting new container"
                        docker run -d --name ${APP_NAME} -p 5000:80 ${HUB_USERNAME}/${APP_NAME}:${BUILD_NUMBER}

                        sleep 5

                        echo "Restarting Nginx"
                        systemctl restart nginx

                         # --- DELETE PREVIOUS IMAGE ---
                        echo "Removing previous Docker images..."
                         docker images ${HUB_USERNAME}/${APP_NAME} --format '{{.ID}} {{.Tag}}' | grep -v "$${BUILD_NUMBER}" | awk '{print $$1}' | xargs -r docker rmi -f
                    
                """
            }
        }
    }
}


    }
    
    post {
        always {
            // Clean workspace
            cleanWs()
        }
        success {
            script {
                sh """
                    echo "Deployment successful!"                 
                """
            }
        }
        failure {
            script {
                sh """
                    echo "Deployment failed!"
                """
            }
        }
    }
}