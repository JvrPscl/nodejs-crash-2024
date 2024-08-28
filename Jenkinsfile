// Estructura caso declarativo
pipeline {

    agent any

    stages {

        stage("build") {

            steps {
                // sh 'npm install'
                echo 'building the nodejs application...'
                nodejs(nodeJSInstallationName: 'node-20-16') {
                    sh 'npm config ls'
                }  
            }
        }

        stage("test") {

            steps {
                echo 'testing the application...'
            }
        }

        stage("deploy") {

            steps {
                echo 'deploying the application...'
            }
        }
    }
}
