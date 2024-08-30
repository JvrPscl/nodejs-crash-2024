
def accionParar() {
    echo 'Continua el stop en groovy externo con comando npm...'
    echo "Parametros accesibles stop: ${params.stopApp}"
    nodejs(nodeJSInstallationName: 'node-20-16') {
        sh 'npm config ls'
    }  
}

return this
