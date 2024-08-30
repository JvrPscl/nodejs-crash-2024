// Estructura caso declarativo

def gv

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
                    // sh 'npm run build'  
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
                // variante con script externo. La variable gv es global
                script {
                   gv = load "script.groovy" 
                   gv.accionParar()
                }
                echo 'Continua el step stop en Jenkinsfile...'
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
