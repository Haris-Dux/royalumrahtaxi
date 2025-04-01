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
                    sh """
                        # Build new Docker image
                        docker build -t ${DOCKER_IMAGE} .

                        # Authenticate with Docker Hub
                        withCredentials([string(credentialsId: 'DOCKERHUB_TOKEN', variable: 'DOCKERHUB_PAT')]) {
                        sh "docker login -u 'harisdux' --password-stdin <<< '${DOCKERHUB_PAT}'"
                        }

                        # Push the image
                        docker push ${DOCKER_IMAGE}
                    """
                }
            }
        }

        
    }
    
    post {
        always {
            // Clean workspace
            cleanWs()
            
            // Print container status
            sh """
                echo "Container status:"
                docker ps -a | grep ${APP_NAME} || true
            """
        }
        success {
            script {
                sh """
                    echo "Deployment successful!"
                    echo "Application is accessible at http://localhost:${PORT}"
                    docker ps | grep ${APP_NAME}
                """
            }
        }
        failure {
            script {
                sh """
                    echo "Deployment failed!"
                    echo "Container logs:"
                    docker logs ${APP_NAME} || true
                """
            }
        }
    }
}