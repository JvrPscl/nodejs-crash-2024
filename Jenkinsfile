// Estructura caso declarativo
pipeline {

    agent any
    parameters {
        booleanParam(name:'startApp', defaultValue: true, description: '')
        booleanParam(name:'stopApp', defaultValue: false, description: '')
    }

    stages {

        stage("start") {
            // Solo ejecutar los steps si startApp está activo
            when {
                expression {
                    params.startApp
                }
            }                                
            steps {
                // sh 'npm install'
                echo 'building-start the nodejs application with params...'
                nodejs(nodeJSInstallationName: 'node-20-16') {
                    sh 'npm config ls'
                    sh 'npm run build'  
                }  
            }
        }

        stage("stop") {
            // Solo ejecutar los steps si startApp está activo
            when {
                expression {
                    params.stopApp
                }
            }                                
            steps {
                // sh 'npm install'
                echo 'stop the nodejs application...'
                nodejs(nodeJSInstallationName: 'node-20-16') {
                    sh 'npm run stop'
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
